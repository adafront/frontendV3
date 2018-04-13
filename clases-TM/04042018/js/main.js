/*
Dados tres números, x y z, si x es mayor que y 
calcular la resta entre x y z, y determinar
si eso es mayor que y, de lo contrario 
sumar x y z (x+z) y multiplicarlo por y.
*/

var x,y,z,w;


if (x > y) {

	w = x - z;
	console.log("W es la resta:"+w);

	if(w > y){
		console.log("W es mayor que Y"+w);
	}else{
		
		w = (x+z)*y;
		console-log("W es menor que y: "+w);
	}
}


// Version 2

if (x > y) {
	w = x - z;
	console.log("W es la resta:"+w);
}

/* No me sirve porque w podría ser undefined */

if(w > y){ // if(w!="undefined")
	console.log("W es mayor que Y");
}else{
		w = (x+z)*y;
		console-log("W es menor que y: "+w);
}







