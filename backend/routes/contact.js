import { Router } from "express";
import { mailContactFormData } from "./mail.js";


export const contactRouter = Router();

contactRouter.post("/", async(req, res, next)=>{
    console.log(req.body)
    try {
        await mailContactFormData(req.body)
        res.status(200).end()
    } catch (error) {
        next(error)
    }
})