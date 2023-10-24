import mongoose from "mongoose";


const transactionsSchema = new mongoose.Schema({
sender:String,
reciver:String,
amount:Number

},
{
    timestamps:true
})

const transactionsModel = mongoose.model("Transaction",transactionsSchema);


export default transactionsModel;


