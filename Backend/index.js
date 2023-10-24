import express from 'express'
import { connection } from './database/connection.js'
import UserRoutes from './src/modules/user/user.router.js'
import bankTransactions from './src/modules/transactions/transaction.router.js'
import cors from 'cors'


const app =express()
const port =3000
app.use(cors())




connection();
app.use(express.json())
app.use("/user",UserRoutes)
app.use("/transaction",bankTransactions)


app.listen(port,()=>{

    console.log("server running");
})