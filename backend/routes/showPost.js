import { Router } from "express";
import { ObjectId } from "mongodb";
import { postCollection, courseCollection } from "../utils/connectToDB.js";
import { timeAgo } from "../utils/timeAgo.js";
import { CustomError } from "../utils/customError.js";


export let showPostRouter = Router()

showPostRouter.get("/course/:id/:slug", async(req, res, next)=>{
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw (new CustomError("404: Page not found", 404));
        }
        let id = ObjectId.createFromHexString(req.params.id)
        let post = await courseCollection.findOne({ _id: id, slug: req.params.slug })
        if (!post) {
            throw (new CustomError("Course not found", 404))
        }
        res.render(`pages/course`, { post });
    } catch (error) {
        next(error)
    }
})
showPostRouter.get("/job/:id/:slug", async(req, res, next)=>{
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw (new CustomError("404: Page not found", 404));
        }
        let id = ObjectId.createFromHexString(req.params.id);
        let post = await postCollection.findOne({ _id: id, slug: req.params.slug })
        if (!post) {
            throw (new CustomError("Job not found", 404))
        }
        res.render(`pages/job`, { post });
    } catch (error) {
        next(error)
    }
})
showPostRouter.get("/article/:id/:slug", async(req, res, next)=>{
    try {
        if (!ObjectId.isValid(req.params.id)) {
            throw (new CustomError("404: Page not found", 404));
        }
        let id = ObjectId.createFromHexString(req.params.id);
        let post = await postCollection.findOne({ _id: id, slug: req.params.slug })
        if (!post) {
            throw (new CustomError("Article not found", 404))
        }
        res.locals.blogUpdate = timeAgo(post.updatedAt.toString());
        res.render(`pages/article`, { post });
    } catch (error) {
        next(error)
    }
})


