import { ObjectId } from "mongodb";
import { postCollection, JobSchema, userCollection } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";
import { isLoggedIn } from "../authMiddleware.js";
import { deleteFolder } from "../utils/assetUploads.js";

export let jobRouter = Router();


// Controllers
let createNewJob = async (req, res, next)=>{
    try {
        let input = new JobSchema (req.body)
        input.createdAt = new Date()
        let newJob = await postCollection.insertOne(input)
        res.json({ id: newJob.insertedId, slug: input.slug })
        await userCollection.updateOne({ _id: req.user.id }, { $unset: { "draft.job": "" } })
    } catch (error) {
        next(error)
    }
}
let findAllJobs = async (req, res) => {
    try {
        let allJob = await postCollection.find({postType: "job"}).toArray()
        if (allJob.length === 0) {
            throw new CustomError("No post found", 404)
        }
        res.json(allJob)
    } catch (error) {
        next(error)
    }
}
let findOneJob = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let job = await postCollection.findOne({ _id: id })
            res.json(job);
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let updateJob = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let input = new JobSchema(req.body)
            await postCollection.updateOne({ _id: id }, { $set: input })
            res.json({ id: id, slug: input.slug })
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let deleteJob = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let deletedJob = await postCollection.findOneAndDelete({ _id: id })
            res.status(204).end();
            deleteFolder(`job/${deletedJob.assetFolder}`);
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}

jobRouter.route("/")
    .get(findAllJobs)
    .post(isLoggedIn, createNewJob);

jobRouter.route("/:id")
    .get(isLoggedIn, findOneJob)
    .patch(isLoggedIn, updateJob)
    .delete(isLoggedIn, deleteJob);


