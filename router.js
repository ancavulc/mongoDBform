const express = require('express');
const router = express.Router();


router.post("/", (req, res) => {
  console.log("BANANA1");
 var myData = {
   name: req.body.name,
   email: req.body.email,
   age: req.body.age,
   phone_number: req.body.phone_number,
   hobbies: req.body.hobbies,
   skills: req.body.skills
 };
 emp.insertOne(myData).then(item => {
   console.log("BANANA2");
 res.send("item saved to database");
 })
 .catch(err => {
   console.log("BANANA3");
 res.status(400).send("unable to save to database");
 });
});

router.get("/", (req,res) => {
  const a = emp.find({}).toArray(function(err, dbres) {


    if (dbres.length > 0) {
      res.send(dbres);
    }
    else {
      res.status(204).send("no data found");
    }


  });
  // .catch(err => {
  //   res.status(500).send("unable to return data");
  // });
});

module.exports = router;
