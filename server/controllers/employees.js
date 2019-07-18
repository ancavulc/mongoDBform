(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Employee = require('../models/employees');

  // Export the methods
  module.exports = {
    // Function to create a new employee
    create: function(req, res) {

//      Instance of the model employee
      var employee = new Employee();
      employee.name = req.body.name;
      employee.email = req.body.email;
      employee.age = req.body.age;
      employee.phone_number = req.body.phone_number;
      employee.hobbies = req.body.hobbies;
      employee.skills = req.body.skills;

      employee.save(function(err, savedEmployee) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          return res.status(200).json(employee);
        }
      });
    },

    delete: function(req, res) {
      Employee.remove({email: req.params.email}, function(err) {
        if (err) {
          return res.status(500).json({
            err: err || err.errmessage
          });
        } else {
          return res.status(200).json({
            message: 'You have successfully deleted an employee'
          });
        }
      });
    },

    find: function(req, res) {
      Employee.find(function(err, employees) {
        if (err) {
          return res.status(500).json({
            err: err || err.errmessage
          });
        } else {
          return res.status(200).json({
            employees: employees
          });
        }
      });
    }
  };
})();
