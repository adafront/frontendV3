var http = require('http');
var puerto = 8080;

var miModulo = require('./modulos/funciones');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    console.log(req.url);

    if(req.url == "/random"){

    	res.write(miModulo.random());
    
    }
    else{
    	res.write(miModulo.saludo());
    }
	
    res.end();

}).listen(puerto, function () {

  console.log( "Escuchando en el puerto " + puerto );

});