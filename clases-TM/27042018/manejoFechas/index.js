// Genero un objeto fecha con el día de hoy

var d = new Date();

// Me quedo con el mes actual va de (0-11)

var month = d.getMonth();

// Me quedo con el día de hoy

var day = d.getDate();

// Pruebo con una fecha arbritaria

var fecha = "2018-04-27";

// Descompongo el string en partes separando por (-) 
// Me devuelve un array

var parts =fecha.split('-');

if((parseInt(parts[1])-1) == month){

	if(parts[2] == day){ 

		console.log("Coincide dia"); 
	}	

	console.log("Coincide mes");	
}	

