/* Imprimir numeros del 1 al 10 */

var n = 1;

while((n>0) && (n <= 10)){
	
	console.log(n);
	n++; // postaccion
}

/* Imprimir los primeros 50 numeros pares */

while(n<=50 && (n%2 == 0)){

	console.log(n);
	n++;

}

/*
	n 	<50 	par

	0	true	true
	1	true	false
*/

while(n<=50){

	if(n%2 == 0){
		console.log(n);
	}
	n++;
}

/* FOR */

	inicio,condicion,postaccion

	var i;

	for (i = 1; i <= 50; i++) {
		console.log(i);	
	}

	for (i = 1; i <= 50; i++) {
		
		if(i%2 == 0){
			console.log(i);
		}	
	}
