var express = require('express');

var router = express.Router();

router.get('/',function(request,response){

	response.send('Llamada GET dentro de customer');
});

router.post('/',function(request,response){

	response.send('Llamada POST dentro de customer');
});

module.exports = router;

