//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var buscadorControlador = require('./controladores/funcionalidades');


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/autos', buscadorControlador.buscarAutos);
app.get('/marcas', buscadorControlador.buscarMarcas);
app.get('/autos/:id',buscadorControlador.informacionAuto);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
