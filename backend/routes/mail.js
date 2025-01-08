import { Router } from "express";
import nodemailer from "nodemailer"
import multer from "multer";


export let mailRouter = Router()
// Configure Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: "587",
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

mailRouter.get("/jobmail", (req, res, next)=>{
    const { to, subject, text } = req.body;
    transporter.sendMail({
        from: "my Job kenny@mavnew.com",
        to: "fkennyf@gmail.com",
        Subject: "Fnmilove Job Response",
        text: "Someone submited a Job Application"
    }, (error, info)=>{
        if (error) {
            console.error('Error sending email:', error);
            next(error)
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    })
})