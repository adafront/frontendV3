var express = require('express');
var router = express.Router();

/* GET random number. */
router.get('/', function(req, res, next) {

  let number = random();

  res.render('random', { title: 'The winner is', number: number});
});


/* GET random number with custom limit. */
router.get('/:limit', function(req, res, next) {


  let number = randomCustom(req.params.limit);

  res.render('random', { title: 'The winner is', number: number});
});

// Random de 0 a 10

function random(){

	return Math.floor((Math.random() * 10));

}

// Random de 0 al limite pasado por parametro

function randomCustom(limit){

	return Math.floor((Math.random() * limit));

}



module.exports = router;