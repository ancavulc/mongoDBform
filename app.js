(function() {
  'use strict';
  // Express is a javascript routing framework.
  var express = require('express'),

  // Mongoose helps to connect to MongoDB
  mongoose = require('mongoose'),

  //Define the app
  app = express(),

  // Define your port
  port = process.env.PORT || 3000,

  // Require the config file
  config = require('./config/config'),

  //Dependency to help with path
  path = require('path'),

  // Body Parser
  bodyParser = require('body-parser'),

  // Controller
  Employee = require('./server/controllers/employees');

  // routes
  // routes = require('./server/routes/employees');
  app.use(bodyParser.json());

  // Routes
  app.get('/api/view', Employee.find);
  app.post('/api/save', Employee.create);
  app.delete('/api/delete/:email', Employee.delete);


  // Connect to the database
  // mongoose.connect(config.db, function(err) {
  //   if (err) {
  //     console.log('Could not connect to database');
  //   } else {
  //     console.log('Connected to the database');
  //   }
  // });

  mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});

  // Default path or route
  app.get('/', function(req, res) {
    // Deliver html file
    res.sendFile(path.join(__dirname + '/public/main.html'));
    app.use(express.static(__dirname + '/public'));
  });


  // Start up the server
  app.listen(port, function(err) {
    if (err) {
      console.log('Cannot connect to port');
    } else {
      console.log('Connected on port ' + port);
    }
  });
})();
