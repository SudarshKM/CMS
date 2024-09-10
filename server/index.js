
import express from "express";

import './connection.js'

import cors from "cors";

import router from './Routes.js'


const PORT = 4300;

const app =  express();

app.use(cors());


app.use(express.json())
app.use(router);


app.listen(PORT , ()=>{
    console.log('server started at ', PORT);
    
})
