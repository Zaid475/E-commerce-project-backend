import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import allroutes from "./Routes/index.js"
import cors from "cors"

const app=express();
dotenv.config();
app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.use(express.json())
app.use("/api/v1",allroutes)



mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("Mongoose Connected")

})
app.listen(8000,()=>{
    console.log("Server running at port 8000")


})


