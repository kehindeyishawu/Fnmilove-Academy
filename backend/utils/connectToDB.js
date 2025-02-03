import { MongoClient, ServerApiVersion } from "mongodb";
import { CustomError } from "./customError.js";
import generateDescription from "./generateDescription.js";
import generateTipColor from "./generateTipColor.js";

let db;
export let courseCollection;
export let postCollection;
export let userCollection;
export let applicantCollection;
export let tokenCollection;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_CONNECT_STRING, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

export async function connectToDB() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        // Send a ping to confirm a successful connection
        db = client.db("fnmilove");
        await db.command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        courseCollection = db.collection("courses")
        postCollection = db.collection("posts")
        userCollection = db.collection("users")
        applicantCollection = db.collection("applicants");
        tokenCollection = db.collection("tokens");
        await courseCollection.createIndex({ title: "text", content: "text" });
        await postCollection.createIndex({ title: "text", content: "text" });
        await applicantCollection.createIndex({ createdAt: 1}, { expireAfterSeconds: 3600 * 24 * 14 });
        await tokenCollection.createIndex({ createdAt: 1}, { expireAfterSeconds: 60 * 15 });
    } catch (error) {
        throw new Error(error.message)
    }
}


export let validate = (input, name)=>{
    if(input && typeof input === "string"){
        return input
    }else{
        throw new CustomError(`${name} field is empty`, 400)
    }
}
let validateArray = (arr, name, minLength = 2) => {
    if (!Array.isArray(arr)) {
        throw new CustomError(`${name} should be an array`, 400);
    }
    if (arr.length < minLength) {
        throw new CustomError(`Kindly make sure you check/upload required ${name} fields`, 400);
    }
    if (!arr.every(item => typeof item === "string")) {
        throw new CustomError(`All elements in ${name} should be strings`);
    }
    return arr;
}

// Schemas
export class ArticleSchema{
    constructor({title, featuredImg, content, assetFolder}){
        this.title = validate(title, "title")
        this.featuredImg = featuredImg|| ""
        this.content = validate(content, "content")
        this.description = generateDescription(content);
        this.postType = "article"
        this.assetFolder = assetFolder
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
    }
}
export class JobSchema{
    constructor({ content, companyCoverImg, companyLogo, logoAccent, title, companyName, jobType, jobLocation, applicationDeadline, assetFolder }){
        this.companyCoverImg = companyCoverImg || "";
        this.companyLogo = companyLogo || "";
        this.logoAccent = logoAccent || "";
        this.companyName = validate(companyName, "companyName")
        this.title = validate(title, "title")
        this.jobType = validate(jobType, "jobType")
        this.jobLocation = validate(jobLocation, "jobLocation")
        this.applicationDeadline = validate(applicationDeadline, "applicationDeadline")
        this.content = validate(content, "content")
        this.description = generateDescription(content)
        this.postType = "job"
        this.assetFolder = assetFolder
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
    }
}
export class CourseSchema{
    constructor({ title, tutors, featuredImg, content, price, assetFolder, tag }){
        this.title = validate(title, "title")
        this.tutors = validate(tutors, "tutors")
        this.content = validate(content, "content")
        this.featuredImg = featuredImg|| ""
        this.price = validate(price, "price")
        this.tag = tag || ""
        this.description = generateDescription(content)
        this.tipColor = generateTipColor();
        this.assetFolder = assetFolder
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
    }
}

export class ApplicantSchema{
    constructor({ firstname, lastname, gender, dob, email, phone, street, city, state, postalCode, courseTitle, courseType, idCards, parentConsent, schoolName, graduationYear, highestEducation, emergencyFullname, emergencyRelationship, emergencyPhone, files }){
        this.firstname = validate(firstname, "firstname")
        this.lastname = validate(lastname, "lastname")
        this.gender = validate(gender, "gender")
        this.dob = validate(dob, "date of birth")
        this.email = validate(email, "email")
        this.phone = validate(phone, "phone")
        this.street = validate(street, "street")
        this.city = validate(city, "city")
        this.state = validate(state, "state")
        this.postalCode = validate(postalCode, "Postal Code")
        this.courseTitle = validate(courseTitle, "Course title")
        this.courseType = validate(courseType, "courseType")
        this.idCards = validateArray(idCards, "Identification Card", 1)
        this.parentConsent = validate(parentConsent, "Parental Consent")
        this.schoolName = validate(schoolName, "School Name")
        this.graduationYear = validate(graduationYear, "Graduation Year")
        this.highestEducation = validate(highestEducation, "highestEducation")
        this.emergencyFullname = validate(emergencyFullname, "emergencyFullname")
        this.emergencyRelationship = validate(emergencyRelationship, "emergencyRelationship")
        this.emergencyPhone = validate(emergencyPhone, "emergencyPhone");
        this.files = validateArray(files, "files");
        this.createdAt = new Date();
    }
}

export class UserSchema{
    constructor({firstname, lastname, email, password}){
        this.firstname = validate(firstname, "firstname")
        this.lastname = validate(lastname, "lastname")
        this.email = validate(email, "email")
        this.password = validate(password, "password") //generate a better validation for password
        this.role = "user";
    }
}

// Graceful shutdown process
let gracefulShutdown = async ()=>{
    setTimeout(()=>{
        console.error("Forcefully shutting down")
        process.exit(1)
    }, 5000)
    await client.close();
    console.log("Server & MongoDB connection closed gracefully");
    process.exit(0);
}

process.on("SIGINT", gracefulShutdown)
process.on("SIGTERM", gracefulShutdown)