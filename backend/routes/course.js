import { ObjectId } from "mongodb";
import { courseCollection, CourseSchema } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";

export let courseRouter = Router();

// Controllers
let createNewCourse = async (req, res, next)=>{
    try {
        let input = new CourseSchema (req.body)
        input.createdAt = new Date()
        let newCourse = await courseCollection.insertOne(input)
        res.json(newCourse)
    } catch (error) {
        next(error)
    }
}
let findAllCourses = async (req, res) => {
    let allCourse = await courseCollection.find().toArray()
    res.json(allCourse)
}
let findOneCourse = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let course = await courseCollection.findOne({ _id: id })
            res.json(course);
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let updateCourse = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = req.params.id
            let input = new CourseSchema(req.body)
            let updatedCourse = await courseCollection.findOneAndUpdate({ _id: id }, { $set: input })
            res.json(updatedCourse)
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}
let deleteCourse = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = req.params.id
            let deletedCourse = await courseCollection.deleteOne({ _id: id })
            res.json(deletedCourse)
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}

courseRouter.route("/").get(findAllCourses).post(createNewCourse)
courseRouter.route("/:id").get(findOneCourse).patch(updateCourse).delete(deleteCourse)
