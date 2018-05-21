var http = require('http');
// agrego el modulo fileServer
var fs = require('fs');

http.createServer(function(req,res){

	//res.write(200,'Content-type');
	fs.readFile('html/perfil.html',function(err,data){
		// Escribo el contenido del arhivo en la respuesta
		res.writeHead(200,{'Content-type':'text/html'});
		res.write(data);
		res.end();	
	})

}).listen('8080',function(){

	console.log("Escuchando en el puerto 8080");
});