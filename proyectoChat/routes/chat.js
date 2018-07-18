var express = require('express');
var router = express.Router();
var userController = require('./controllers/chatController')

router.post('/enviarMensaje',chatController.enviarChat);
router.get('chequearMensajes/:token',chatController.chequearMensajes);


