import {} from 'dotenv/config'
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from "express";
import {app} from "./app.js"
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})