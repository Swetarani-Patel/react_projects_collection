import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRoute } from "./routes/authRoute.js";
import { appointmentRoute } from "./routes/appointmentRoute.js";
import { mongoconnection } from "./database/db.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoute);
app.use(appointmentRoute);
const PORT = process.env.PORT;
app.listen(PORT, async () => {
 await mongoconnection();
  console.log(`Server is running on PORT ${PORT}`);
});
