/* Generar funcion de login */
/* Devuelva true en caso de logeo y false en caso contrario*/
/* Crear un array de usuarios y otro de contraseñas (2 arrays), y validar */
function validar(usuario, password){

	if(usuario == "pepe" && password == 1234){
		return true;
	}else{
		return false;
	}
}

function login(usuario, password){

	var cantidad = 0;
	var valido =  validar(usuario,password);

		while(valido == false  && cantidad < 3){
				console.log("Usuario invalido");
				cantidad++;
				valido =  validar(usuario,password);		
		}

		if(valido){ console.log("Bienvenido"); }

		if(cantidad == 3 && !valido){ console.log("Usuario bloqueado");}


}/*cierra la function login */


login("pepa",4321);







