import nodemailer from "nodemailer"
import { CustomError } from "../utils/customError.js";
import { convert } from "html-to-text";
import { cloudname } from "../../frontend/src/utils/cloudinary.js";


// Configure Nodemailer
const zoho = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: "587",
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    // tls: {
    //     rejectUnauthorized: false // add this if you're having issues with self-signed certificates  
    // }
});

let generateRegFormData = ({ firstname, lastname, gender, dob, email, phone, street, city, state, postalCode, courseTitle, courseType, idCards, parentConsent, schoolName, graduationYear, highestEducation, emergencyFullname, emergencyRelationship, emergencyPhone })=>{
    return `
                <main>
                    <h1>Registration Form Applicant</h1>
                    <div>First Name: ${firstname}</div>
                    <div>Last Name: ${lastname}</div>
                    <div>Gender: ${gender}</div>
                    <div>Date of Birth: ${dob}</div>
                    <div>Email: ${email}</div>
                    <div>Phone Number: ${phone}</div>
                    <div>Street Address: ${street}</div>
                    <div>City: ${city}</div>
                    <div>State: ${state}</div>
                    <div>Postal Code: ${postalCode}</div>
                    <div>Course Title: ${courseTitle}</div>
                    <div>Course Type: ${courseType}</div>
                    <div>Identification: ${idCards}</div>
                    <div>Parental Consent to travel: ${parentConsent}</div>
                    <div>Last School Attended: ${schoolName}</div>
                    <div>Year of Graduation: ${graduationYear}</div>
                    <div>Highest Level of Education: ${highestEducation}</div>
                    <div>Emergency Contact Fullname: ${emergencyFullname}</div>
                    <div>Emergency Contact Relationship: ${emergencyRelationship}</div>
                    <div>Emergency Contact Number: ${emergencyPhone}</div>
                <main>
            `
}

let generateRegFormAttachments = ({files})=>{
    files.map((file, index) => ({
        filename:`document${index + 1}`,
        path: `${cloudname}/${file}`
    }))
}

export let regFormMailData = async (inputs)=>{
    try {
        let emailReport = await zoho.sendMail({
            from: "Fnmilove Academy sales@fnmiloveacademy.com",
            to: "vincent@fnmiloveacademy.com",
            subject: "Registration Form Applicant",
            text: convert(generateRegFormData(inputs)),
            html: generateRegFormData(inputs),
            attachments: generateRegFormAttachments(inputs)
            
        })
        console.log("emails that were rejected during mail sent")
        console.log(emailReport.envelope)
        console.log(emailReport.rejected)
    } catch (error) {
        console.log(error.message)
        throw (new CustomError("Error: Unable to send form data"))
    }
}
