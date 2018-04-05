/* Determinar si un número es primo */

var num = 0;
var cont = 2;
var esPrimo = true;

	while((cont > 1 && cont < num) && esPrimo == true){

			resto = num%cont;

			if(resto == 0){
				esPrimo = false;
			}

			cont++;
	}

	if(esPrimo == false){

		console.log("No es primo");
	
	}else{

		console.log("Es primo");
	
	}