import mongoose from "mongoose";

export const connection =()=>{
mongoose.connect("mongodb://127.0.0.1:27017/bankSystem").then(()=>{
    console.log("DB connected");
}).catch((err)=>{
  console.log("DB error",err);
})


} 