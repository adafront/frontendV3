/* Alimentando a los animales del zoo */

/* Herviboros, carnivoros */
/* Perezoso, koala, tigre, guacamayo, elefante, boa */
/* Elefante es Babar */
/* cantidad de patas */
/* A partir de la cant de patas, kilos de comida */

/* Mostrar pantalla, comida y cant de kilos */

// Si tienen 2 patas y herviboro 1.5 kg
// Si tienen 4 patas y herviboro 3 kg
// Si tienen 4 patas y carnivoros 5 kg
// No patas, un cobayo -.-
// Si elefante o se llama Babar 20 kg

var animal = "elefante";
var cantPatas = 4;
var alimentacion = "herviboro";
var kilos = 0;

if(cantPatas >= 2){

	if(cantPatas == 2){
	
		kilos = 1.5;
		console.log("Es herviboro y come"+ kilo);
	
	}else{ // mas de dos patas

		if(animal == "elefante" && nombre =="Babar"){
			
			kilos = 20;
			console.log("Come:"+kilos);
		
		}else{ // no elefante no babar

			if(alimentacion == "herviboro"){
			
				kilos = 3;
				console.log("Come 3 kilos");
			
			}else{
			
				console.log("Come 5 kilos");
			}
		}
	}	
}else{ // No tiene patas

	console.log("A la boa, cobayo");
} 

/* Version 2 */

	switch(cantPatas){

		case 0: console.log("Cobayo"); break;
		case 2:
				kilos = 1.5;
				console.log("Come: "+kilos);
		break;
		case 4: 
				if(alimentacion == "carnivoro"){

					kilos = 5;
				
				}else{

					kilos = 3;
					
					if(animal =="elefante" && nombre == "babar"){

						kilos = 20;
					}	

					console.log("Come: "+kilos);
				}
		break;		
	}