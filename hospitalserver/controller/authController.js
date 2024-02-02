import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const userSignUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(401).json({ message: "password doesn't match" });
  }
  const isUserExist = await UserModel.findOne({ email });
  if (isUserExist) {
    return res.status(401).json({ message: "user already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 6);

  const newUser = new UserModel({
    email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "signup successful" });
  } catch (error) {
    res.status(500).json({ message: "registration failed" });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const authUser = await UserModel.findOne({ email });
    if (!authUser) {
      return res
        .status(401)
        .json({ message: "User doesn't exist. Please signup" });
    }
    const match = await bcrypt.compare(password, authUser.password);
    if (!match) {
      return res.status(401).json({ message: "password doesn't match" });
    }
    const token = jwt.sign({ id: authUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({ token, message: "Congrats! login successful" });
  } catch (error) {
    req.status(500).json({ message: "login failed" });
  }
};
