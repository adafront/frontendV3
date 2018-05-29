var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('user', 
  	{ message: 'Una peticion a usuario'});
});

module.exports = router;
