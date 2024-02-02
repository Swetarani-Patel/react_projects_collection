const { EmployeeModel } = require("../models/employeesModel");

const addEmployees = async (req, res) => {
  try {
    const employee = new EmployeeModel(req.body);
    await employee.save();
    res.status(201).json({ employee, message: "employees added successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while calling addEmployees" });
  }
};
const getEmployees = async (req, res) => {
  const { sort, department, search, page, order, limit } = req.query;
  let sortOptions = {};
  let query = {};
  if (sort) {
    sortOptions[sort] = 1;
    if (order === "desc") {
      sortOptions[sort] = -1;
    }
  }
  if (department) {
    query.department = department;
  }
  if (search) {
    query.$or = [
      {
        firstName: { $regex: search, $options: "i" },
      },
      {
        lastName: { $regex: search, $options: "i" },
      },
    ];
  }

  try {
    const employee = await EmployeeModel.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);
    res
      .status(200)
      .json({ employee, message: "employees retrevied successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while calling getEmployees" });
  }
};
const updateEmployees = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ employee, message: "employees updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while calling updateEmployees" });
  }
};
const deleteEmployees = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await EmployeeModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ employee, message: "employees deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while calling deleteEmployees" });
  }
};

module.exports = {
  addEmployees,
  getEmployees,
  updateEmployees,
  deleteEmployees,
};
