import nodemailer from "nodemailer"
import { convert } from "html-to-text";
import { CustomError } from "../utils/customError.js";
import { validate } from "../utils/connectToDB.js";


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

// Applicant Registration Form Mailing
let generateRegFormData = ({ firstname, lastname, gender, dob, email, phone, street, city, state, postalCode, courseTitle, courseType, idCards, parentConsent, schoolName, graduationYear, highestEducation, emergencyFullname, emergencyRelationship, emergencyPhone })=>{
    return `
                <main">
                    <h1>Registration Form Applicant</h1>
                    <p>First Name: ${firstname}</p>
                    <p>Last Name: ${lastname}</p>
                    <p>Gender: ${gender}</p>
                    <p>Date of Birth: ${dob}</p>
                    <p>Email: ${email}</p>
                    <p>Phone Number: ${phone}</p>
                    <p>Street Address: ${street}</p>
                    <p>City: ${city}</p>
                    <p>State: ${state}</p>
                    <p>Postal Code: ${postalCode}</p>
                    <p>Course Title: ${courseTitle}</p>
                    <p>Course Type: ${courseType}</p>
                    <p>Identification: ${idCards}</p>
                    <p>Parental Consent to travel: ${parentConsent}</p>
                    <p>Last School Attended: ${schoolName}</p>
                    <p>Year of Graduation: ${graduationYear}</p>
                    <p>Highest Level of Education: ${highestEducation}</p>
                    <p>Emergency Contact Fullname: ${emergencyFullname}</p>
                    <p>Emergency Contact Relationship: ${emergencyRelationship}</p>
                    <p>Emergency Contact Number: ${emergencyPhone}</p>
                <main>
            `
}

let generateRegFormAttachments = ({files})=>{
    console.log(files)
    let formAttachments = files.map(file => ({
        path: file,
    }))
    console.log(formAttachments)
    return formAttachments;
}

export let mailRegFormData = async (inputs)=>{
    try {
        let emailReport = await zoho.sendMail({
            from: "Fnmilove Academy sales@fnmiloveacademy.com",
            to: "vincent@fnmiloveacademy.com",
            subject: "Registration Form Applicant",
            text: convert(generateRegFormData(inputs)),
            html: generateRegFormData(inputs),
            attachments: generateRegFormAttachments(inputs)
        })
        console.log("email Envelope")
        console.log(emailReport.envelope)
        console.log("emails that were rejected during mail sent")
        console.log(emailReport.rejected)
    } catch (error) {
        console.warn("Unable to send Registration form data")
        throw error.message
    }
}

// Contact Form Mailing
const genContactFormData = ({fullname, email, phone, issue, message})=>{
    return `
        <p>Good Day Fnmilove, here's an email from your website contact form</p>
        <h3>Issue: ${validate(issue, 'issue')}</h3>
        <p>${validate(message, 'Message')}</p>
        <h4 style='margin-top: 60px;'>From: ${validate(fullname, "Full Name")}</h4>
        <div>${validate(phone, 'phone')}</div>
        <div>${validate(email, 'email')}</div>
    `
}

export let mailContactFormData = async(inputs)=>{
    try {
        let emailReport = await zoho.sendMail({
            from: "Fnmilove Academy sales@fnmiloveacademy.com",
            to: "vincent@fnmiloveacademy.com",
            subject: "Contact Form Data",
            text: convert(genContactFormData(inputs)),
            html: genContactFormData(inputs)
        })
        console.log("email Envelope")
        console.log(emailReport.envelope)
        console.log("emails that were rejected during mail sent")
        console.log(emailReport.rejected)
    } catch (error) {
        console.warn(error.message)
        throw new CustomError("Unable to send Contact form data", 400)
    }
}

// Job Form Mail
const genJobFormData = ({ companyName, title, firstname, lastname, email, phone, message, experience }) => {
    return `
        <p>Good Day Fnmilove, You have a new Job Applicant for ${companyName}'s ${title} vacancy </p>
        <div>First Name: ${validate(firstname, 'firstname')}</div>
        <div>Last Name: ${validate(lastname, 'lastname')}</div>
        <div>Phone Number: ${validate(phone, 'phone')}</div>
        <div>Email: ${validate(email, 'email')}</div>
        <div>Years of Experience: ${experience}</div>
        <p>${validate(message, 'Message')}</p>
    `
}

export let mailJobFormData = async (inputs, file) => {
    try {
        let emailReport = await zoho.sendMail({
            from: "Fnmilove Academy sales@fnmiloveacademy.com",
            to: "vincent@fnmiloveacademy.com",
            subject: "Job Application Form",
            text: convert(genJobFormData(inputs)),
            html: genJobFormData(inputs),
            attachments: [{
                filename: file.originalname,
                content: file.buffer
            }]
        })
        console.log("email Envelope")
        console.log(emailReport.envelope)
        console.log("emails that were rejected during mail sent")
        console.log(emailReport.rejected)
    } catch (error) {
        console.warn(error.message)
        throw new CustomError("Unable to send Contact form data", 400)
    }
}