import { Router } from "express";
import { userCollection } from "../utils/connectToDB.js";
import { ObjectId } from "mongodb";


export let draftRouter = Router()
// controllers
let createDraft = async (req, res, next)=>{
    try {
        // change the id to the user id when the user authentication is implemented
        let response;
        if (req.body.postType === "job") {
            response = await userCollection.updateOne({ _id: ObjectId.createFromHexString("6771e0d3e2b2efb65cf6be4a") }, { $set: {"draft.job": req.body}})
        }else if(req.body.postType === "article"){
            response = await userCollection.updateOne({ _id: ObjectId.createFromHexString("6771e0d3e2b2efb65cf6be4a") }, { $set: {"draft.article": req.body}})
        }else if(req.body.postType === "course"){
            response = await userCollection.updateOne({ _id: ObjectId.createFromHexString("6771e0d3e2b2efb65cf6be4a") }, { $set: {"draft.course": req.body}})
        }
        res.json(response)
    } catch (error) {
        next(error)
    }
}

// send time and type
draftRouter.route("/").post(createDraft)

