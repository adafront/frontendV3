var express = require('express');

var app = express();

app.get('/hola',function(request,response){

	response.send('Hola mundo con Get');
});

app.post('/hola',function(request,response){

	response.send("Hola mundo con post");
})

app.listen(8080);

