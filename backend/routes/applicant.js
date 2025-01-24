import { Router } from "express";
import { applicantCollection, ApplicantSchema } from "../utils/connectToDB.js";
import Flutterwave from "flutterwave-node-v3"
import crypto from "crypto"
import { ObjectId } from "mongodb";


const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

export let applicantRouter = Router()

applicantRouter.post("/", async(req, res, next)=>{
    try {
        const inputs = new ApplicantSchema(req.body)
        let formEntry = await applicantCollection.insertOne(inputs);
        // generating payload_hash
        let tx_ref = formEntry.insertedId.toString()
        let {email} = inputs
        const hashedSecretKey = crypto.createHash("sha256").update(process.env.FLW_SECRET_KEY, 'utf8').digest("hex");
        const StringToBeHashed = 20000 + 'NGN' + email + tx_ref + hashedSecretKey;
        const payload_hash = crypto.createHash("sha256").update(StringToBeHashed, 'utf8').digest("hex");
        res.send({tx_ref, payload_hash})
    } catch (error) {
        next(error)
    }
})

// for Flutterwave Payment Webhook Notification
applicantRouter.post("/flw-webhook", async(req, res, next)=>{
    try {
        console.log("received Webhook from Flutterwave")
        const secretHash = process.env.FLW_SECRET_HASH;
        const signature = req.headers["verif-hash"];
        if(!signature || (signature !== secretHash)){
            res.status(401).end()
            console.log("Verif-hash does not match or isn't provided")
            console.log(`secret hash: ${secretHash}`)
            console.log(`signature: ${signature}`)
            return;
        }
        console.log("verification valid")
        const payload = req.body;
        // query DB for matching _id to tx_ref(in FLW payload)
        let applicant = await applicantCollection.findOne({_id: ObjectId.createFromHexString(payload.data.tx_ref)})
        if(!applicant){
            res.status(200).end()
            return
        }
        // verifying transaction id with FLW id in received payload
        const response = await flw.Transaction.verify({ id: payload.data.id });
        if (
            response.data.status === "successful"
            && response.data.amount === 20000
            && response.data.currency === "NGN") {
            // Success! Confirm the customer's payment by sending mail with details to company-------------------------------
            // delete applicant record from DB
            await applicantCollection.deleteOne({_id: applicant._id})
            res.status(200).end()
            // implement cloudinary image delete operation below ----------------------------------
            return;
        } else {
            // Inform the customer their payment was unsuccessful (optional: incase you activated webhook for failed transactions)
            // end webhook replies
            res.status(200).end()
        }
    } catch (error) {
        next(error)
    }
})

// route for assigning flw_id
applicantRouter.put("/flwid-assign", async(req, res, next) => {
    try {
        let updateReport = await applicantCollection.updateOne({_id: ObjectId.createFromHexString(req.body.tx_ref)}, {$set: {flw_id: req.body.flw_id}})
        console.log('Payment assigning flw_id report')
        console.log(updateReport)
        res.status(201).end()
    } catch (error) {
        next(error)
    }
})

// cronjob function for polling Flutterwave Payment Confirmation every 36 hours
setInterval(async () => {
    try {
        let unverifiedPayments = await applicantCollection.find({flw_id: {$exists: true}})
        console.log(`Cronjob Delete Report`)
        unverifiedPayments.forEach(async(payment) => {
            // verifying transaction id with asssigned flw_id in DB
            const response = await flw.Transaction.verify({ id: payment.flw_id });
            if (
                response.data.status === "successful"
                && response.data.amount === 20000
                && response.data.currency === "NGN") {
                // Success! Confirm the customer's payment by sending mail with details to company-----------------------
                // delete applicant record from DB
                let jobReport = await applicantCollection.deleteOne({ _id: payment._id })
                // implement cloudinary image delete operation below ----------------------------------
                console.log(jobReport)
                
            } 
        })
    } catch (error) {
        console.log(error)
    }
}, 60000 * 60 * 24 * 1.5);

// let sample = async()=>{
//     let doc = await applicantCollection.deleteOne({ _id: ObjectId.createFromHexString("6792f0351ca82dba5259480e")})
//     console.log(doc)
// }
// setTimeout(() => {
//     sample()
// }, 5000);