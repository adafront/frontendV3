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

router.get('/:isbn',function(req,res,next){

	let isbn = req.params.isbn;
	let libro = search(isbn);

	if(libro){
		res.render('libro', { title: 'Libreria de los sueños', libro: libro});
	
	}else{
		res.render('error');
	}
});

router.delete('/:isbn',function(req,res,next){



});

router.get('/delete/:isbn',function(req,res,next){

	let isbn = req.params.isbn;

	let libro =	books.find(function(libro)
				{ return libro.isbn == isbn;});

	console.log(libro);

	books.splice(books.indexOf(libro),1);	

	res.redirect('/libros');
	
});

router.post('/agregar',function(req,res,next){

	let libro = {};

	console.log(req.body.title);

	libro.titulo = req.body.title;
	libro.isbn = req.body.isbn;
	books.push(libro);

	res.redirect('/libros');

});

/**
 *  Objeto tipo libro
 *
**/ 
function search(isbn){

	let i;
	for(i=0;i<books.length;i++){

		if(books[i].isbn == isbn){

			return books[i];
		}
	}
	return null;
}















	





module.exports = router;