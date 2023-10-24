import  userModel from "../../../../database/models/user.model.js"
export const GetUsers= async (req,res)=>{

let users = await userModel.find()

res.json ({message:"done",users})
}

//1-Add User
export const AddUser =async(req,res)=>{
let{name , email , balance} = req.body
let exist = await userModel.findOne({email})
if(exist){

    res.json ({message:"User already exist"})    
}
else{
let addedUser =await userModel.insertMany({name , email , balance});
res.json ({message:"Done",addedUser})

}
}
