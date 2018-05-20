var http =require('http');
var puerto = 8080;

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Hola Mundo!');
//Creo el servidor.
res.end();

}).listen(puerto,function(){

	console.log("Escuchando puerto ${puerto}");
});