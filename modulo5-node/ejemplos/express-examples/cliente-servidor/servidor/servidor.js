//paquetes necesarios para el proyecto
var express = require('express');

// modulo que permite parsear la url
var bodyParser = require('body-parser');

// modulo que permite responder peticiones de todos los origenes
// Access-Control-Allow-Origin
var cors = require('cors');

var controlador = require('./controladores/funcionalidades');

var app = express();

// indico que voy a utilizar los modulos
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Utilizo la función json del módulo (otras disponibles: text, raw)
app.use(bodyParser.json());

app.get('/personajes', controlador.listPersonajes);
app.get('/personajes/':id, controlador.mostrarPersonaje);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
