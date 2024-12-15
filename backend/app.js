import express from "express"
import {resolve} from "path"
import expressEjsLayouts from "express-ejs-layouts"

let app = express()

// set public folder
app.use(express.static(resolve("../frontend/public",)))
// set view engine
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "layout")

app.get("/", (req, res)=>{
    res.render("layout", {name:"kenny"})
})


app.listen(4000, ()=>{
    console.log("server running on port 4000")
})