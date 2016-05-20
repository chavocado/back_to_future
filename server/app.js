var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var employee = require('./routes/employee');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended:true}));

//modules n routes
//app.use('/add', add);
app.use('/employee', employee);

//catch all
app.use('/', index);

// app.get('/*', function(req, res) {
//   //console.log('request params', req.params);
//   var file = req.params[0] || 'views/index.html';
//   res.sendFile(path.join(__dirname, "./public", file));
// });

app.listen(app.get('port'), function(){
  console.log('Server is ready on port:' + app.get('port'));
});
