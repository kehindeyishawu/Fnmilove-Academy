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
import { mailRouter } from "./routes/mail.js"
import { showPostRouter } from "./routes/showPost.js"

let app = express()
const __dirname = import.meta.dirname;
// set public folder
app.use(express.static(join(__dirname, "./public")))
if (process.env.NODE_ENV === "development"){
    app.use(express.static(join(__dirname, "../frontend", "./public")))
} else if (process.env.NODE_ENV === "production"){
    app.use(express.static(join(__dirname, "../frontend", "./dist")))
}
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
app.get("/api/post", async (req, res)=>{
    let allPosts = await postCollection.find(req.query).toArray()
    if (allPosts.length === 0) {
        throw new CustomError("No post found", 404)
    }
    res.json(allPosts)
    // console.log(req.path);
})
app.use(showPostRouter)
app.use("/api/articles", articleRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/courses", courseRouter)
app.use("/api/draft", draftRouter)
app.use("/api", mailRouter)
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
app.listen(process.env.PORT || 4000, async ()=>{
    console.log(`Server running on ${process.env.PORT || 4000}. Waiting for Database to connect...`)
    await connectToDB()
})