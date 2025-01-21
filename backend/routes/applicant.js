import { Router } from "express";
import { applicantCollection, ApplicantSchema } from "../utils/connectToDB.js";


export let applicantRouter = Router()

applicantRouter.post("/api/applicant", async(req, res, next)=>{
    try {
        const inputs = new ApplicantSchema(req.body)
        console.log(req.body)
        let formEntry = await applicantCollection.insertOne(inputs);
        res.send(formEntry.insertedId)
    } catch (error) {
        next(error)
    }
})



