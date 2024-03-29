const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  department: {
    type: String,
    enum: ["Tech", "Marketing", "Operation"],
    required: true,
  },
  salary: { type: Number, required: true },
});

const EmployeeModel = mongoose.model("Employee", employeeSchema);
module.exports = { EmployeeModel };
