var express = require('express');
var router = express.Router();

//endpoint
router.get('/', function(req, res){
  res.send('listado de clientes');
});

router.post('/', function(req, res){
  res.send('crear un nuevo cliente');
});

module.exports = router;