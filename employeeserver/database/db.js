const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoconnection = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("momgod is disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connected to mongodb");
  });
};

module.exports = { mongoconnection };
