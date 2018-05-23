// Cargo el módulo express
var express = require('express');
// Inicializo express
var app = express();
// Cargo mi módulo custom
var customer = require('./customer.js');
// Le indico a la app que voy a utilizar el módulo cuando llamen a esa url
app.use('/customer',customer);

app.listen(3000);