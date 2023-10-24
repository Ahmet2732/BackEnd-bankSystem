import transactionModel from '../../../../database/models/transactions.model.js'
import userModel from '../../../../database/models/user.model.js'

export const transaction = async (req, res, next) => {
    try {
    let { sender , reciver , amount }=req.body
        console.log(req.body);
    let Sender  = await userModel.findOne({email:sender})
    let Reciver = await userModel.findOne({email:reciver})
    if (!Sender || !Reciver) {
        return res.json({message:("User Not Found")});
    }
    if(Sender.balance>0  && amount<Sender.balance){

       let samount = Sender.balance -= amount
       let camount = Reciver.balance += amount
       console.log(samount , camount);
      const supdated = await userModel.findOneAndUpdate({email:sender},{balance:samount},{new:true})
      const rupdated=await userModel.findOneAndUpdate({email:reciver},{balance:camount},{new:true})
      console.log(supdated);
      console.log(rupdated);
        const transfare = new transactionModel({
             sender:sender,
             reciver:reciver,
             amount:amount


        })

        await transfare.save()
        res.json ({message:"Done"})
    }
    if(Sender.balance<amount){


    return  res.json ({message:"Insufficient Balance"})

    }      

    }catch (error) {
    return res.json({ message: "catch error", error })
}}










// 4-get data
export const getData = async (req, res, next) => {
    try {

        const data = await transactionModel.find()
        return res.json({ message: "Done", data })
    } catch (error) {
        return res.json({ message: "catch error", error })
    }
}
