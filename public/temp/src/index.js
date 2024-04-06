require('dotenv').config({path: './env'})

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 )
    console.log('server listening on port: $ {process.env.PORT');

})
.catch((error) => {
    console.log("MONGO db connection error: " + error);
})










/*
import express from "express";
const app = express()

; ( async () => {
    try{
        mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
        app.on("error",(error) =>{
            console.log("error", error);
            throw err
        }) 

        app.listen(process.env.PORT, () => {
            console.log('App is listening on port ${process.env.PORT}');
        })

    } catch(error) {
        console.error("error", error)
        throw err
    }
})()

*/