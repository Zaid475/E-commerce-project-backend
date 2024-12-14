import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import allroutes from "./Routes/index.js"
import cors from "cors"
import cookieParser from "cookie-parser";


const app=express();
dotenv.config();
app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.use(express.json())
app.use("/api/v1",allroutes)
app.use(cookieParser());



mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("Mongoose Connected")

})
app.listen(8000,()=>{
    console.log("Server running at port 8000")


})


