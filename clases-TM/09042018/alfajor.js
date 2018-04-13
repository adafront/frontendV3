/*
Ambos arreglos son iguales
Cuál de los dos es más largo
Cuantas letras tienen en común
*/

var x = ["a","l","f","a"];
var y = ["e","l","f","a","j","o","l"];

function compararArrays(x,y){
	var i,letras;
	if(x.length == y.length){

		// Si son iguales
		for(i=0;x.length;i++){

			if(x[i] != y[i]){
				
				letras = letrasEnComun(x,y);	
				return "No son iguales, tiene: "+letras+" en comun";
			}
		}

		return "Son iguales";

	}else{

		if(x.length > y.length){

			letras = letrasEnComun(x,y);
			return "X es mayor que Y, tiene: "+letras+" en comun";
		
		}else{
			letras = letrasEnComun(x,y);
			return "Y es mayor que X, tiene: "+letras+" en comun";
		}

	}

}

function letrasEnComun(x,y){

	var i,j;
	var k = 0;
	var boleano = false;
	var z = [];

	for(i=0;i<x.length;i++){

		for(j=0;j<y.length;j++){

			if(x[i] == y[j]){
				boleano = true;
			}
		}
		if(boleano){
			if(z.indexOf(x[i]) == -1){
				z[k] = x[i];
				k++;
			}	
			boleano = false;			
		}
	}

	return z.length;
}


console.log(compararArrays(x,y));