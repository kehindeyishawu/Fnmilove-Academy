import "dotenv/config"
import express from "express"
import {resolve} from "path"
import expressEjsLayouts from "express-ejs-layouts"
import { CustomError } from "./utils/customError.js"
import { connectToDB, postCollection } from "./utils/connectToDB.js"
import {articleRouter} from "./routes/article.js"
import { jobRouter } from "./routes/job.js"
import { courseRouter } from "./routes/course.js"
import { draftRouter } from "./routes/draft.js"

let app = express()

// set public folder
app.use(express.static(resolve("./public")))
app.use(express.static(resolve("../frontend", "./public",)))
// set view engine
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "layout")
// parse incoming form data and json
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// passing variables to all views
app.use((req, res, next)=>{
    res.locals.fadingNotification = ""
    res.locals.staticNotification = ""
    next()
})
// Routes
app.get("/api/post", async (req, res)=>{
    let allPosts = await postCollection.find().toArray()
    if (allPosts.length === 0) {
        throw new CustomError("No post found", 404)
    }
    res.json(allPosts)
})
app.use("/api/articles", articleRouter)
app.use("/api/jobs", jobRouter)
app.use("/api/courses", courseRouter)
app.use("/api/draft", draftRouter)
app.get("/page", (req, res)=>{
    res.render("pages/course")
})
app.get("/test", (req, res)=>{
    throw new CustomError("Go away", 500)
    // res.render("pages/article");
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