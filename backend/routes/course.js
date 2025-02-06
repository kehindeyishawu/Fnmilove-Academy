import { ObjectId } from "mongodb";
import { courseCollection, CourseSchema, userCollection } from "../utils/connectToDB.js";
import { Router } from "express";
import { CustomError } from "../utils/customError.js";
import { isLoggedIn } from "../authMiddleware.js";
import { deleteFolder } from "../utils/assetUploads.js";

export let courseRouter = Router();

// Controllers
let createNewCourse = async (req, res, next)=>{
    try {
        let input = new CourseSchema (req.body)
        input.createdAt = new Date()
        let newCourse = await courseCollection.insertOne(input)
        res.json({ id: newCourse.insertedId, slug: input.slug })
        await userCollection.updateOne({ _id: req.user.id }, { $unset: { "draft.course": "" } })
    } catch (error) {
        next(error)
    }
}
let findAllCourses = async (req, res, next) => {
    try {
        let { limit, skip, search, project } = req.query;
        let postLimit = parseInt(limit);
        let postSkip = parseInt(skip);
        let postQuery = {}
        search && (postQuery.$text = { $search: search });
        
        let cursor = await courseCollection.find(postQuery);
        search ? await cursor.project({ score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }) : cursor.sort({createdAt: -1});
        project && await cursor.project({ [project]: 1 })
        let allCourse = await cursor.limit(postLimit).skip(postSkip).toArray();
        res.json(allCourse);
    } catch (error) {
        next(error)
    }
}
let findOneCourse = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let id = ObjectId.createFromHexString(req.params.id)
            let course = await courseCollection.findOne({ _id: id });
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
            let id = ObjectId.createFromHexString(req.params.id)
            let input = new CourseSchema(req.body)
            await courseCollection.updateOne({ _id: id }, { $set: input })
            res.json({id: id, slug: input.slug})
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
            let id = ObjectId.createFromHexString(req.params.id)
            let deletedCourse = await courseCollection.findOneAndDelete({ _id: id })
            res.status(204).end();
            deleteFolder(`course/${deletedCourse.assetFolder}`);
        } else {
            throw new CustomError("404: Page not found", 400)
        }
    } catch (error) {
        next(error)
    }
}

courseRouter.route("/")
    .get(findAllCourses)
    .post(isLoggedIn, createNewCourse);

courseRouter.route("/:id")
    .get(isLoggedIn, findOneCourse)
    .patch(isLoggedIn, updateCourse)
    .delete(isLoggedIn, deleteCourse);
