var express = require('express');
var router = express.Router();

var nenas = ['Isabel','Eduviges','Solange','Fernanda'];
var nenes = ['Bartolomeo','Segismundo','Oliverio','Aurelio'];

var todos = nenas.concat(nenes);
/* GET home page. */
router.get('/', function(req, res, next) {

  let nombres = shuffle(todos);	
  res.render('nombres', { title: 'Elige un nombre', nombres: nombres });
});

router.get('/nenas', function(req, res, next) {

  let nombres = shuffle(nenas);	
  res.render('nombres', { title: 'Elige un nombre', nombres: nombres });
});

router.get('/:genero',function(req,res,next){

	let nombres;

	let gen = req.params.genero;

	switch(gen){

		case 'nena': 
			nombres = shuffle(nenas);
		break;

		case 'nene':
			nombres = shuffle(nenes);	
		break;

		default: 
			nombres = shuffle(todos);
		break;	
	}

	res.render('nombres', { title: 'Elige un nombre', nombres: nombres });

})



function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = router;






