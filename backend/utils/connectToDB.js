import { MongoClient, ServerApiVersion } from "mongodb";
import { CustomError } from "./customError.js";

let db;
export let courseCollection;
export let postCollection;
export let userCollection;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_CONNECT_STRING, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
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
    } catch {
        throw new Error("Database connection/network fail")
    }
}


let validate = (input, name)=>{
    if(input && typeof input === "string"){
        return input
    }else{
        throw new CustomError(`${name} field is empty`, 400)
    }
}

// Schemas
export class ArticleSchema{
    constructor({title, featuredImg, content}){
        this.title = validate(title, "title")
        this.featuredImg = featuredImg|| ""
        this.content = validate(content, "content")
        this.postType = "article"
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
    }
}
export class JobSchema{
    constructor({content, companyCoverImg, companyLogo,logoAccent, jobTitle, companyName, jobType, jobLocation, applicationDeadline}){
        this.companyCoverImg = companyCoverImg || "";
        this.companyLogo = companyLogo || "";
        this.logoAccent = logoAccent || "";
        this.companyName = validate(companyName, "companyName")
        this.jobTitle = validate(jobTitle, "jobTitle")
        this.jobType = validate(jobType, "jobType")
        this.jobLocation = validate(jobLocation, "jobLocation")
        this.applicationDeadline = validate(applicationDeadline, "applicationDeadline")
        this.content = validate(content, "content")
        this.postType = "job"
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
    }
}
export class CourseSchema{
    constructor({title, tutors, featuredImg, content, price}){
        this.title = validate(title, "title")
        this.tutors = validate(tutors, "tutors")
        this.content = validate(content, "content")
        this.featuredImg = featuredImg|| ""
        this.price = validate(price, "price")
        this.slug = title.toLowerCase().replace(/\s/g, "-");
        this.updatedAt = new Date()
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