const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/emp';
MongoClient.connect(url, function(err,db){
  console.log("Connected");
    db.close();
});
