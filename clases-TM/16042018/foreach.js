var mutante = {'nombre':'Wolverine',
				'Comic':'X-Men',
				'Editora':'Marvel',
				'Peliculas': ['X-Men','Logan']
			   } 

var data = [mutante,'rogue','ciclope'];

for(i=0;i<data.length;i++){
	console.log(data[i]);
}

function mostrar(e){console.log(e);}

data.forEach(mostrar);

data.forEach(function(e){

	console.log(e.nombre);
});

/***
 *	@params e | elemento del arreglo
 *  @params indice | indice del elemento
 *
 **/

data.forEach(function(e,indice){

	console.log("El elemento: "+e+" está en :"+indice);
});


data.forEach(function(e,indice,array){

	console.log("El elemento: "+e+" está en :"+indice);

	console.log(array);
});

/*** ECS6 ***/


data.forEach(elem => {
	console.log(elem);
});

/**** LET y VAR ***/

var valido = true; // Global
const pi = 3.14;

/**
 *	verifica el valor de valido global
 *
 **/

function validar(){

	if(valido){ console.log("Todo piola"); }
}

/**
 * Verifica validez valido local
 *
**/ 
function validar2(){

	let valido= true; // declaro una variable local

	if(valido){ console.log("Todo bien");}
}


if(valido){

	let otra = false;
}

