import { Router } from "express";
import { mailContactFormData, mailJobFormData } from "./mail.js";
import multer, { memoryStorage } from "multer";
import { CustomError } from "../utils/customError.js";

let upload = multer({
    storage: memoryStorage(),
    limits: {
        fieldSize: 4 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
            'application/msword', // .doc
            'application/pdf' // .pdf
        ];

        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Accept the file
        } else {
            cb(new CustomError('Only .docx, .doc, and .pdf files are allowed.', 400), false); // Reject the file
        }
    }
});
export const contactRouter = Router();

contactRouter.post("/", async(req, res, next)=>{
    try {
        await mailContactFormData(req.body)
        res.status(200).end();
    } catch (error) {
        next(error)
    }
})

contactRouter.post("/job", upload.single("resume"), async(req,res, next)=>{
    try {
        await mailJobFormData(req.body, req.file);
        res.status(200).end();
    } catch (error) {
        next(error)
    }
})