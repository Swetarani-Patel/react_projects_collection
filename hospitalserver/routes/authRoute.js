import express from "express";
import { userLogin, userSignUp } from "../controller/authController.js";

export const authRoute = express.Router();
authRoute.post("/signup", userSignUp);
authRoute.post("/login", userLogin)