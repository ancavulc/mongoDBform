var express = require("express");
const bodyParser = require('body-parser');
var app = express();
var port = 3000;
global.MongoClient = require('mongodb').MongoClient;
var router = require("./router");
var url = "mongodb://localhost:27017";



console.log("BANANA4");
global.MongoClient.connect(url, function(err, client){
  console.log("BANANA5");
  global.db = client.db("employee");
  global.emp = global.db.collection("emp");


  console.log("BANANA6");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/name', router);

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/main.html");
});
