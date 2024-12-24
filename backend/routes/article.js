import { ObjectId } from "mongodb";
import { articleCollection, ArticleSchema } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";

export let articleRouter = Router();
// Controllers
let findAllArticles = async (req, res)=>{
    let allArticle = await articleCollection.find().toArray()
    res.json(allArticle)
}
let findOneArticle = async (req, res, next)=>{
    try {
        if(ObjectId.isValid(req.params.id)){
            let id = ObjectId.createFromHexString(req.params.id)
            let article = await articleCollection.findOne({_id: id})
            res.json(article);
        }else{
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let createNewArticle = async (req, res, next)=>{
    try {
        let input = new ArticleSchema (req.body)
        let newArticle = await articleCollection.insertOne(input)
        res.json(newArticle)
    } catch (error) {
        next(error)
    }
}

articleRouter.route("/").get(findAllArticles).post(createNewArticle)
articleRouter.route("/:id").get(findOneArticle)


