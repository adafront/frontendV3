self = {};
var userService = require('./services/userService');

self.registrar = function(){

	// TODO
}

self.login = function(user,pass,res){

	let id = userService.validarUsuario(user,pass);
	if(id != 0){
		let amigos = userService.getAmigos(id);
		userService.setStatus(id);
		res.json({'mensaje':'Usuario logeado correctamente',
				  'amigos': amigos});
	}else{
		res.json({'mensaje':'El usuario no existe'});
	}	
}

self.agregarAmigo = function(req,res,next){

	let username = req.params.name;

	let existe = userService.existeUsuario(username);

	if(existe){

		let token = req.params.token;

		let yo = userService.getMyUser(token);

		userService.agregarAmigo(yo,existe);
	}
}

module.exports = self;
