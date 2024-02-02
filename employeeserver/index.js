const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { authRoute } = require("./routes/authRoute.js");
const {mongoconnection } = require("./database/db.js");
const { employeeRoute } = require("./routes/employeeRoute.js");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", authRoute);
app.use("/", employeeRoute)
app.listen(8000, async () => {
  await mongoconnection();
  console.log("Server is running on port 8000");
});
