import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  specialization: {
    type: String,
    enum: ["Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"],
    required: true,
  },
  experience: { type: Number, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  slots: { type: Number, required: true },
  fee: { type: Number, required: true },
});

export const AppointmentModel = mongoose.model(
  "appointment",
  appointmentSchema
);
