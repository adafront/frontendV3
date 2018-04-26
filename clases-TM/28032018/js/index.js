/* Tomar dos variables, si ambas son
mmayores de 10, entonces los sumo, sino
los multiplico */

x = 10;
y = 10;
z = 0;

if(x>10 && y>10){

	z = x+y; 
	/* Ejecuto la suma, solo si ambas variables cumplen. */

}else{

	z = x*y;
	/* Ejecuto si al menos una es menor que 10 */
}

console.log("El resultado es: "+z);


/* Sumar dos variables si al menos una de ellas es mayor de 10,
	de lo contrario multiplicarlos. */


if(x > 10 || y > 10){

	z = x + y;

}else{

	z = x*y;
}

console.log("Resultado:"+z);

/* Mostrar mensaje de bienvenida incluyendo nombre y apellido.
   Solo si coinciden con  los valores "Belen" y "Alegre" */

nombre = "Belen";
apellido = "Alegre";
bienvenida = " ";
console.log(bienvenida);

if(nombre=="Belen" && apellido=="Alegre"){
	bienvenida = "Bienvenida a ADA "+nombre+","+apellido;
	console.log(bienvenida);
}

console.log(bienvenida);
bienvenida=" ";













