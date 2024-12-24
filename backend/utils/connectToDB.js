import { MongoClient, ServerApiVersion } from "mongodb";
import { CustomError } from "./customError.js";

let db;
export let courseCollection;
export let articleCollection;
export let jobCollection;

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
        articleCollection = db.collection("articles")
        jobCollection = db.collection("jobs")
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
        this.content = validate(content, "content")
        this.featuredImg = featuredImg|| ""
        this.createdAt = new Date()
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