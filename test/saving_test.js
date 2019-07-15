const assert = require('assert');
const Employees = require('../models/employees.js');

//Describe tests
describe('saving record', function(){
  //create tests

  it('saving a record to database', function(done) {
      var char = new Employees({
        name: 'Anca'
      });

      char.save().then(function(){
        assert(char.isNew === false);

      });
done();
  });

  //next test


});
