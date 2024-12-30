import { Router } from "express";
import { userCollection } from "../utils/connectToDB.js";


export let draftRouter = Router()
// controllers
let createDraft = async (req, res, next)=>{
    try {
        let response = await userCollection.updateOne({type:req.body.postType}, {$set: req.body}, {upsert: true})
        res.json(response)
    } catch (error) {
        next(error)
    }
}

// send time and type
draftRouter.route("/").post(createDraft)

