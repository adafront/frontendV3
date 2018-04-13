/*
1)
var nombres = ['Pepe', 'Pirulo','Lalo','Euclides'];


if(nombres.indexOf('Euclides') > -1){
	console.log('Euclides está en la lista de nombres');
}else{
	console.log('Euclides no está');
}*/

/*************************************************/
/*2)
var nombres = ['Pepe', 'Pirulo','Lalo','Euclides'];


var x = 'Lalo';

for(var i =0; i<nombres.length; i++){
	if(nombres[i] == x){
		console.log(nombres[i]+ " esta en la posición " + i +  " de nombres");
		break;
	}
}*/

/*********************************************/
/*3)
var nombres = ['Pepe', 'Pirulo','Lalo','Euclides'];
var esta = false;
var i = 0;

while(esta== false && i < nombres.length){
	if(nombres[i] == x){
		esta == true;
	}
	i++;
}

if(esta){
	console.log("Está!");
}

*/


var numeros = [12,16,16,8,9];
var mayor = 0;
var contador = 0;

for(var i=0; i< numeros.length; i++){
	if(numeros[i]>mayor){
		mayor=numeros[i];
		contador=0;
	}

	if(numeros[i] == mayor){
		contador++;
	}
}

console.log("El numero mayor es " + mayor + " aparece " + contador + " veces");










