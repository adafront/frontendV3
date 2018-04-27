const rutaImg = "img";
// Traigo en string la info localStorage
var cumplesStorage = localStorage.getItem("cumples");
// Recupero el json - objeto js
var jSon = JSON.parse(cumplesStorage);
// Me quedo con el arreglo de cumples
var cumples = jSon.cumples;

/**
 *	Recupero los cumples guardados
 **/

function proximosCumples(){

	$.each(cumples,function(index,elem){

		let li = `<li><p><span>${elem.fechaNac}</span>
				  ${elem.nombre}</p>
				  <button class="borrar" 
				  data-id="${index}">x</button></li>`;
		$('#cumples').append(li);		

		// Agrego acá el evento $('.borrar')....
	});
}	

function cumpleDelDia(){

	if(cumples.length == 0){

		return alert("No hay cumpleaños cargados");
	
	}else{

		// Excluye el limite superior 
		let indice = Math.floor(Math.random() * cumples.length);
		/*
		while(indice == cumples.length){
			indice = Math.floor(Math.random() * cumples.length);		
		}	
		*/
		let cumpleHoyImg  = cumples[indice].imagen;	
		let cumpleHoyName = cumples[indice].nombre;

		let h1 = `<h1>${cumpleHoyName}</h1>`;
		let img = `<img src="img/${cumpleHoyImg}.png">`;

		$('#cumple-dia').append(h1);
		$('#cumple-dia').append(img);
	} // else	
}

/** Borro de la lista de proximos cumples **/

/*

$('.borrar').on('click',function(e){

	console.log("aqui");
	e.preventDefault();
	let li = $(this);
	li.parent().remove(); // borro del HTML
	let indice = li.data('id');
	cumples.splice(indice,1);	
	jSon.cumples = cumples;
	console.log(jSon);
	jSon.total = cumples.length;
	// Convierto en cadena de caracteres
	let datos = JSON.stringify(jSon);
	// Lo guardo en el localStorage
	localStorage.setItem("cumples",datos);
});

*/

/** Escucho sobre el documento y filtro por elemento **/

$(document).on('click','ul button',function(e){

	console.log("aqui");
	e.preventDefault();
	let li = $(this);
	li.parent().remove(); // borro del HTML
	let indice = li.data('id');
	cumples.splice(indice,1);	
	jSon.cumples = cumples;
	console.log(jSon);
	jSon.total = cumples.length;
	// Convierto en cadena de caracteres
	let datos = JSON.stringify(jSon);
	// Lo guardo en el localStorage
	localStorage.setItem("cumples",datos);
});


/** Chequeo la carga del documento antes de ejecutar las funciones **/

$(document).ready(function(e){

	proximosCumples();
	cumpleDelDia();
});










