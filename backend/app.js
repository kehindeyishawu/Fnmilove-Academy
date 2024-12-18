import "dotenv/config"
import express from "express"
import {resolve} from "path"
import expressEjsLayouts from "express-ejs-layouts"
import { CustomError } from "./utils/customError.js"
import { connectToDB } from "./utils/connectToDB.js"
import {articleRouter} from "./routes/article.js"

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

// Routes
app.use("/articles", articleRouter)
app.get("/test", (req, res)=>{
    res.render("pages/article");
})

// Error Handling
app.use((err, req, res, next)=>{
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message)
    } else {
        res.status(500).send(`Server Error: ${err.message}`)
    }
})

// Running Server
app.listen(4000, async ()=>{
    console.log("Server running on port 4000. Waiting for Database to connect...")
    await connectToDB()
})