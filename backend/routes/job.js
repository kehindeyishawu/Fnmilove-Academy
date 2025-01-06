import { ObjectId } from "mongodb";
import { postCollection, JobSchema } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";

export let jobRouter = Router();


// Controllers
let createNewJob = async (req, res, next)=>{
    try {
        let input = new JobSchema (req.body)
        input.createdAt = new Date()
        let newJob = await postCollection.insertOne(input)
        res.json(newJob)
    } catch (error) {
        next(error)
    }
}
let findAllJobs = async (req, res) => {
    let allJob = await postCollection.find({postType: "job"}).toArray()
    res.json(allJob)
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
            let id = req.params.id
            let input = new JobSchema(req.body)
            let updatedJob = await postCollection.findOneAndUpdate({ _id: id }, { $set: input })
            res.json(updatedJob)
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
            let id = req.params.id
            let deletedJob = await postCollection.deleteOne({ _id: id })
            res.json(deletedJob)
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}

jobRouter.route("/").get(findAllJobs).post(createNewJob)
jobRouter.route("/:id").get(findOneJob).patch(updateJob).delete(deleteJob)


