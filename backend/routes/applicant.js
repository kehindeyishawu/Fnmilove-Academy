import { Router } from "express";
import { applicantCollection, ApplicantSchema } from "../utils/connectToDB.js";
import Flutterwave from "flutterwave-node-v3"


const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

export let applicantRouter = Router()

applicantRouter.post("/", async(req, res, next)=>{
    try {
        const inputs = new ApplicantSchema(req.body)
        let formEntry = await applicantCollection.insertOne(inputs);
        res.send(formEntry.insertedId)
    } catch (error) {
        next(error)
    }
})

// for Flutterwave Payment Webhook Notification
applicantRouter.post("/flw-webhook", (req, res, next)=>{
    console.log("received Webhook from Flutterwave")
    console.log(req.headers);
    const secretHash = process.env.FLW_SECRET_HASH;
    const signature = req.headers["verif-hash"];
    if(!signature || (signature !== secretHash)){
        res.status(401).end()
        console.log("No match")
        console.log(`secret hash: ${secretHash}`)
        console.log(`signature: ${signature}`)
        return;
    }
    const payload = req.body;
    console.log(payload)
    // do something with the payload that doesn't take much time here
    res.status(200).end()
})

// cronjob function for polling Flutterwave Payment Confirmation every 36 hours
setInterval(async () => {
    let PendingApplicantPayments = await applicantCollection.find({paymentVerified: false})
}, 60000 * 60 * 24 * 1.5);