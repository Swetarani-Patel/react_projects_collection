const express = require("express");
const { addEmployees, getEmployees, updateEmployees, deleteEmployees } = require("../controller/employeeController.js");
const employeeRoute = express.Router();
employeeRoute.post('/employees', addEmployees);
employeeRoute.get('/employees', getEmployees)
employeeRoute.put('/employees/:id', updateEmployees)
employeeRoute.delete('/employees/:id', deleteEmployees)

module.exports = {employeeRoute}