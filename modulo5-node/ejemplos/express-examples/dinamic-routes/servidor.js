var express = require('express');

var app = express();

app.get('/:id',function(request,response){

	response.send('El id recibido es: '+request.params.id);
});

app.listen(8080);