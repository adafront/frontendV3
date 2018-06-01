var express = require('express');
var router = express.Router();

var books = [{ titulo: 'Harry Potter 1',
			   isbn:'198432',
			   img: 'images/harry_potter.png'
			 },
			 { titulo: 'Harry Potter 2',
			   isbn:'198433',
			   img: 'images/harry_potter2.jpg'
			 },
			 { titulo: 'Harry Potter 3',
			   isbn:'198434',
			   img: 'images/harry_potter.png'
			 }];

/* GET books. */
router.get('/', function(req, res, next) {

  res.render('libros', { title: 'Libreria de los sueños', libros: books});
});


module.exports = router;