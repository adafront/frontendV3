var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello world!");
});

app.get('/customer', function(req, res){
  res.send('listado de clientes');
});

app.post('/customer', function(req, res){
  res.send('crear un nuevo cliente');
});

app.listen(3000, function () {
  console.log('a la escucha en el puerto 3000')
});