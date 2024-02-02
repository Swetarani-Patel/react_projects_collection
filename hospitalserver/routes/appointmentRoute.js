import express from "express";
import {
  createUserAppointment,
  deleteUserAppointment,
  getUserAppointment,
  updateUserAppointment,
} from "../controller/appointmentController.js";

export const appointmentRoute = express.Router();

appointmentRoute.get("/appointment", getUserAppointment);
appointmentRoute.post("/appointment", createUserAppointment);
appointmentRoute.put("/appointment/:id", updateUserAppointment);
appointmentRoute.delete("/appointment/:id", deleteUserAppointment);
