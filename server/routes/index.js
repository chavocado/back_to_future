var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/*', function(req, res) {
  //console.log('request params', req.params);
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, "../public", file));
});


module.exports = router;
