import mongoose from "mongoose";

//For third party library you can also use this repetative code
import dotenv from "dotenv";
dotenv.config()

//export a function that connects to db

const db=()=>{

    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connecting Mongodb")
    })
    .catch((err)=>{
        console.log("Failed to connecting mongodb")
    })
}

export default db;