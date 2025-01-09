import "dotenv/config"
import express from "express"
import {join} from "path"
import expressEjsLayouts from "express-ejs-layouts"
import { CustomError } from "./utils/customError.js"
import { connectToDB, courseCollection, postCollection } from "./utils/connectToDB.js"
import {articleRouter} from "./routes/article.js"
import { jobRouter } from "./routes/job.js"
import { courseRouter } from "./routes/course.js"
import { draftRouter } from "./routes/draft.js"
import { ObjectId } from "mongodb"
import { timeAgo } from "./utils/timeAgo.js"
import { mailRouter } from "./routes/mail.js"
import { currencyFormatter } from "./utils/currencyFormatter.js"

let app = express()
const __dirname = import.meta.dirname;
// set public folder
app.use(express.static(join(__dirname, "./public")))
app.use(express.static(join(__dirname, "../frontend", "./public")))
app.use(express.static(join(__dirname, "../frontend", "./dist")))
// set view engine
app.set("view engine", "ejs")
app.set("views", join(__dirname, "./views"));
app.use(expressEjsLayouts)
app.set("layout", "layout")
// parse incoming form data and json
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// passing variables to all views
app.use((req, res, next)=>{
    res.locals.fadingNotification = ""
    res.locals.staticNotification = ""
    res.locals.domain = "https://fnmiloveacademy.com"
    res.locals.path = req.path
    next()
})
// Routes
app.get("/test", (req, res) => {
    res.render("pages/article");
    throw new CustomError("Go away", 500);
})
app.get("/api/post", async (req, res)=>{
    let allPosts = await postCollection.find(req.query).toArray()
    if (allPosts.length === 0) {
        throw new CustomError("No post found", 404)
    }
    res.json(allPosts)
    // console.log(req.path);
})
app.get("/:postType/:id/:slug", async(req, res, next)=>{
    if (!ObjectId.isValid(req.params.id)){
        throw new CustomError("404: Page not found", 400);
    }
    // let {fadeNotification} = req.query
    let post;
    if(req.params.postType=== "course"){
        let id = ObjectId.createFromHexString(req.params.id)
        post = await courseCollection.findOne({ _id: id, slug: req.params.slug })
        res.locals.price = currencyFormatter(post.price);
    }else{
        let id = ObjectId.createFromHexString(req.params.id);
        post = await postCollection.findOne({ _id: id, slug: req.params.slug })
        res.locals.blogUpdate = timeAgo(post.updatedAt.toString());
    }
    if (post === null){
        next( new CustomError("Post not found", 400))
    }
    console.log(post)
    console.log(timeAgo(post.updatedAt.toString()));
    res.render(`pages/${req.params.postType}`, { post });
})

app.use("/api/articles", articleRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/courses", courseRouter)
app.use("/api/draft", draftRouter)
app.use("/api", mailRouter)
// app.get("/:page", (req, res)=>{
//     res.render(`pages/${req.params.page}`)
// })
app.get("*", (req, res)=>{
    res.sendFile(join(__dirname, "../frontend", "dist", "index.html"))
})

// Error Handling
app.use((err, req, res, next)=>{
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message)
        console.log(err.message)
    } else {
        res.status(500).json(`Server Error: ${err.message}`)
        console.log(err.message)
    }
})

// Running Server
app.listen(4000, async ()=>{
    console.log("Server running on port 4000. Waiting for Database to connect...")
    await connectToDB()
})