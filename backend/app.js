import "dotenv/config"
import express from "express"
import {join} from "path"
import expressEjsLayouts from "express-ejs-layouts"
import session from "express-session";
import MongoDBStore from "connect-mongodb-session";
import { connectToDB, postCollection } from "./utils/connectToDB.js"
import {articleRouter} from "./routes/article.js"
import { jobRouter } from "./routes/job.js"
import { courseRouter } from "./routes/course.js"
import { draftRouter } from "./routes/draft.js"
import { showPostRouter } from "./routes/showPost.js"
import { applicantRouter } from "./routes/applicant.js";
import { contactRouter } from "./routes/contact.js";
import { authRouter } from "./routes/auth.js";
import passport from "passport";


let app = express()
const __dirname = import.meta.dirname;
// set public folder
app.use(express.static(join(__dirname, "./public")))
if (process.env.NODE_ENV === "development"){
    app.use(express.static(join(__dirname, "../frontend", "./public")))
} else{
    app.use(express.static(join(__dirname, "../frontend", "./dist")))
}
// set view engine
app.set("view engine", "ejs")
app.set("views", join(__dirname, "./views"));
app.use(expressEjsLayouts)
app.set("layout", "layout")
// parse incoming form data and json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Express Session config 
let sessionStore = new MongoDBStore(session)(
    {
        uri: process.env.DB_CONNECT_STRING,
        databaseName: "fnmilove",
        collection: 'sessions',
    },
    function (error) {
        // Should have gotten an error
        if(error){
            console.log(error)
        }else{
            console.log("Session store online")
        }
    }
);

sessionStore.on('error', function (error) {
    // Also get an error here
    console.log(error)
});
app.use(session({
    secret: process.env.SESSION_SECRETS,
    store: sessionStore,
    cookie: {
        secure: process.env.NODE_ENV === "development" ? false : true,
        maxAge: 60000 * 60 * 24 * 1, //one day expiration
    },
    resave: false,
    saveUninitialized: false,
}))
// passport
app.use(passport.authenticate('session'));
// passing variables to all views
app.use((req, res, next)=>{
    res.locals.domain = "https://fnmiloveacademy.com";
    res.locals.path = req.path;
    res.locals.cloudname = "https://res.cloudinary.com/fnmilove/image/upload";
    res.locals.user = req.user;
    console.log(req.hostname)
    next()
})
// Routes
app.get("/api/post", async (req, res, next)=>{
    try {
        let {limit, skip, postType, search} = req.query;
        let postLimit = parseInt(limit);
        let postSkip = parseInt(skip);
        let postQuery = {}
        postType && (postQuery.postType = postType);
        search && (postQuery.$text = {$search: search});
        
        let cursor = await postCollection.find(postQuery);
        search ? await cursor.project({ score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }) : cursor.sort({ updatedAt: -1 });
        let allPosts = await cursor.limit(postLimit).skip(postSkip).toArray();
        res.json(allPosts)
    } catch (error) {
        next(error)
    }
})
app.use("/api/applicant", applicantRouter)
app.use(showPostRouter)
app.use("/api/articles", articleRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/courses", courseRouter)
app.use("/api/draft", draftRouter)
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter)
app.get("*", (req, res)=>{
    res.sendFile(join(__dirname, "../frontend", "dist", "index.html"))
})

// Error Handling
app.use((err, req, res, next)=>{
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message);
        console.log(err.message);
    } else {
        res.status(500).json(`Something went wrong from our Side`)
        console.log(err.message)
    }
})

// Running Server
app.listen(process.env.PORT || 4000, async ()=>{
    console.log(`Server running on ${process.env.PORT || 4000}. Waiting for Database to connect...`)
    await connectToDB()
})