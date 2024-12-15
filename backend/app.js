import express from "express"
import {resolve} from "path"
import expressEjsLayouts from "express-ejs-layouts"
import { CustomError } from "./utils/customError.js"

let app = express()

// set public folder
app.use(express.static(resolve("./public")))
app.use(express.static(resolve("../frontend", "./public",)))
// set view engine
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "layout")

app.get("/", (req, res)=>{
    res.render("pages/article")
})

app.use((err, req, res, next)=>{
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message)
    } else {
        res.status(500).send(`Server Error: ${err.message}`)
    }
})

app.listen(4000, ()=>{
    console.log("server running on port 4000")
})