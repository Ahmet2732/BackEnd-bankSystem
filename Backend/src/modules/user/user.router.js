import express  from "express";
import {GetUsers,AddUser}from "./controller/user.controller.js";

const router = express.Router()
router.get("/",GetUsers)
router.post("/AddUser",AddUser)














export default router