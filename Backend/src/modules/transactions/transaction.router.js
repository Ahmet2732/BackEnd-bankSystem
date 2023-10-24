import express  from "express";
import {transaction,getData} from "./controller/transaction.controller.js";

const router = express.Router()

router.get("/",getData)
router.post('/',transaction)












export default router