(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var EmployeeSchema = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    age: {
      type: String
    },
    phone_number: {
      type: String
    },
    hobbies: {
      type: String
    },    
    skills: {
      type: String
    }
  });

  //Export the model
  module.exports = mongoose.model('employee', EmployeeSchema);
})();
