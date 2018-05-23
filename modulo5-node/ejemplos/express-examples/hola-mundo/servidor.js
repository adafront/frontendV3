var express = require('express');

var app = express();

app.get('/',function(request,response){

	response.send("Hola mundo esto es express");
});

app.listen(8080);