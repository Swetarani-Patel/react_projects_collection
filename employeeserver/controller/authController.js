const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userSignup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      return res
        .status(401)
        .json({ message: "user already exist please login" });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({ message: "password doesn't match" });
    }

    const hasedPassword = await bcrypt.hash(password, 7);
    const user = new UserModel({
      email,
      password: hasedPassword,
      confirmPassword: hasedPassword,
    });
    await user.save();
    res.status(201).json({ message: "signup successful", user });
  } catch (error) {
    res.status(401).json({ message: "signup failed" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserExist = await UserModel.findOne({ email });
    if (!isUserExist) {
      return res
        .status(401)
        .json({ message: "user does exist please register" });
    }
    const match = await bcrypt.compare(password, isUserExist.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: isUserExist._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token, message: "login successful" });
  } catch (error) {
    res.status(401).json({ message: "login failed" });
  }
};

module.exports = { userLogin, userSignup };
