import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
export const mongoconnection = () => {
  mongoose.connect(MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("connected to MONGODB successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("diconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connected to MONGODB");
  });
};
