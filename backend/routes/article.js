import { ObjectId } from "mongodb";
import { articleCollection } from "../utils/connectToDB.js";
import { Router } from "express";

export let articleRouter = Router();
// Controllers
let findAllArticles = async (req, res)=>{
    let allArticle = await articleCollection.find().toArray()
    res.json(allArticle)
}
let findOneArticle = async (req, res)=>{
    try {
        let id2 = ObjectId.createFromHexString(req.params.id)
        console.log(ObjectId.isValid(req.params.id))
        
    } catch (error) {
        
    }
    console.log(id2)
    // let article = await articleCollection.findOne({_id: ObjectId(req.params.id)})
    // res.json(article);
}
let createNewArticle = async (req, res)=>{
    let newArticle = await articleCollection.insertOne({
        title: req.body.title,
        featuredImg: req.body.featuredImg || "",
        content: req.body.content,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.json(newArticle)
}

articleRouter.route("/").get(findAllArticles).post(createNewArticle)
articleRouter.route("/:id").get(findOneArticle)


