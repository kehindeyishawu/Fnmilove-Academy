import { ObjectId } from "mongodb";
import { postCollection, ArticleSchema, userCollection } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";
import { isLoggedIn } from "../authmiddleware.js";

export let articleRouter = Router();


// Controllers
let createNewArticle = async (req, res, next)=>{
    try {
        let input = new ArticleSchema (req.body)
        input.createdAt = new Date()
        let newArticle = await postCollection.insertOne(input)
        res.json({ id: newArticle.insertedId, slug: input.slug })
        await userCollection.updateOne({_id: req.user.id}, {$unset: {"draft.article": ""}})
    } catch (error) {
        next(error)
    }
}
let findAllArticles = async (req, res) => {
    try {
        let allArticle = await postCollection.find({postType: "article"}).toArray()
        if (allArticle.length === 0) {
            throw new CustomError("No post found", 404)
        }
        res.json(allArticle)
    } catch (error) {
        next(error)
    }
}
let findOneArticle = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let article = await postCollection.findOne({ _id: id })
            res.json(article);
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let updateArticle = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let input = new ArticleSchema(req.body)
            await postCollection.updateOne({ _id: id }, { $set: input })
            res.json({ id: id, slug: input.slug })
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let deleteArticle = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id);
            let deletedArticle = await postCollection.deleteOne({ _id: id })
            res.json(deletedArticle)
            console.log(deletedArticle)
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}

articleRouter.route("/")
    .get(findAllArticles).
    post(isLoggedIn, createNewArticle);

articleRouter.route("/:id")
    .get(isLoggedIn, findOneArticle)
    .patch(isLoggedIn, updateArticle)
    .delete(isLoggedIn,deleteArticle)


