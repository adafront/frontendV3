self = {};

var users = [{
			  "id": 1,	
			  "user":"pepe",
			  "pass":"1234",
			  "conectado":false,
			  "amigos": [2]},
			 {"id":2 , 
			  "user":"pepa",
			  "pass":"4321",
			  "conectado":false,
			  "amigos": [1]},
			 {"id": 3,
			  "user":"pepito",
			  "pass":"7654",
			  "conectado":false,
			  "amigos": []}
			];

self.validarUsuario = function(username,pass){

	let valido = users.find(u=>u.user == username && u.pass == pass)

	if(valido) return valido.id;

	return 0;
}

self.getAmigos = function(id){

	let respuesta = [];
	let yo = users.find(u=>u.id == id);

	for(i=0;i<yo.amigos.length;i++){

		for(j=0;j<users.length;j++){

			if(users[j].id == yo.amigos[i]){

				// username y estado
				let user = {'username': users[j].user,
							'estado':users[j].conectado}

				respuesta.push(user);
			}
		}
	}

	return respuesta;

}

self.setStatus = function(id){

	let yo = users.find(u=>u.id == id);	

	yo.conectado = true;
}

self.getMyUser = function(token){

	return users.find(u=>u.id == token); 
}

self.existeUsuario = function(username){

	let usuario = users.find(u=>u.username == username);

	return usuario.id;

}

self.agregarAmigo = function(yo,amigoId){

	//[1,2] <= amigoId
	if(yo.amigos.indexOf(amigoId) == -1){

		yo.amigos.push(amigoId);
	}

	return true;
}

module.exports = self;