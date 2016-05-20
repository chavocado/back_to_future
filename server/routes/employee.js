var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = 'postgres://localhost:5432/employee';

// router.get('/', function(req, res) {
//   //console.log('request params', req.params);
//   var file = req.params[0]
//   res.sendFile());
// });
router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM employees', function (err, result) {
      done();

      console.log(result.rows);

      res.send(result.rows);
    });
  });
});


router.post('/', function (req, res) {
  var employee = req.body;

  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('INSERT INTO employees (first_name, last_name, emp_id, job_title, yearly_salary) ' +
                  'VALUES ($1, $2, $3, $4, $5)',
                   [employee.first_name, employee.last_name, employee.emp_id, employee.job_title, employee.yearly_salary],
                 function (err, result) {
                   done();

                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

                   res.sendStatus(201);
                 });
  });
});



module.exports = router;
