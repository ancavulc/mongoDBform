const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const EmployeesSchema = new Schema({

  name: String,
  email: String,
  age: Number,
  phone_number: Number,
  hobbies: String,
  skills: String

});

const Employees = mongoose.model('emp', EmployeesSchema);

module.exports = Employees;
