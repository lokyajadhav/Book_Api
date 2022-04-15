require("dotenv").config();

const express=require("express");
const bookie=express();
bookie.use(express.json())

const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("connection established"))
bookie.listen(3000,()=>console.log("server started"))