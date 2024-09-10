


// import { MongoClient } from "mongodb";

import mongoose from "mongoose";

const connectionString = 'mongodb+srv://sudarshkm:sudarshkm@cluster0.vx72i.mongodb.net/cmssystem?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(connectionString).then(()=>{
    console.log("connected to MongoDB");
    
}).catch((err)=>{
    console.log(err);
    
})

