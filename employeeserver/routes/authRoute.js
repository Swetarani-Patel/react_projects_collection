const express = require("express");
const { userSignup, userLogin } = require("../controller/authController.js");
const authRoute = express.Router();
authRoute.post("/signup", userSignup);
authRoute.post("/login", userLogin);
module.exports = {authRoute}