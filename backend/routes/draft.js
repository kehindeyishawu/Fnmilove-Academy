import { Router } from "express";
import { userCollection } from "../utils/connectToDB.js";
import { ObjectId } from "mongodb";
import { isLoggedIn } from "../authmiddleware.js";


export let draftRouter = Router()
// controllers
let createDraft = async (req, res, next)=>{
    try {
        // change the id to the user id when the user authentication is implemented
        let response;
        if (req.body.postType === "job") {
            response = await userCollection.updateOne({ _id: req.user.id }, { $set: {"draft.job": req.body}})
        }else if(req.body.postType === "article"){
            response = await userCollection.updateOne({ _id: req.user.id }, { $set: {"draft.article": req.body}})
        }else if(req.body.postType === "course"){
            response = await userCollection.updateOne({ _id: req.user.id }, { $set: {"draft.course": req.body}})
        }
        res.json(response)
    } catch (error) {
        next(error)
    }
}

let findDraft = async (req, res, next) => {
    try {
        let draftTypes = ["article", "job", "course"]
        if(!draftTypes.includes(req.params.type)) return res.status(400).send("This request is not allowed");
        let response;
        let {type} = req.params
        if (type === "job") {
            response = await userCollection.findOne({ _id: req.user.id }, { projection: { "draft.job": 1, _id: 0 } });
        } else if (type === "article") {
            response = await userCollection.findOne({ _id: req.user.id }, { projection: { "draft.article": 1, _id: 0 } });
        } else if (type === "course") {
            response = await userCollection.findOne({ _id: req.user.id }, { projection: { "draft.course": 1, _id: 0 } });
        }
        if (!response.draft[type]) return res.status(204).end()
        res.json(response.draft[type]);
    } catch (error) {
        next(error)
    }
}

// send time and type
draftRouter.route("/").post(isLoggedIn, createDraft)
draftRouter.route("/:type").get(isLoggedIn, findDraft)

