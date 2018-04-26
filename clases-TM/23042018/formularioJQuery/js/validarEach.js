/* Todos los inputs son obligatorios */

function validar(e){

	e.preventDefault();

	var nombre = $('#nombre').val();
	var apel = $('#apel').val();
	var mail = $('#mail').val();

	console.log(nombre);
// Version 1

/* Si un campo vacio formulario invalido */

	/*if(nombre.length != 0 && apel.length != 0 && mail.length != 0){
		return true;
	}*/

// Version 2

	if(nombre.length == 0 || apel.length == 0 || mail.length == 0){
		
		let errores = $('#errores');

		errores.html("Hay campos sin completar");
		

		var pelis = $('.genero');

		$.each(pelis,function(indice,elemento){

			console.log(elemento);

			if(elemento.checked == true){
				console.log("Elegiste esta peli");
			}
		});

		return false;
	}	

	return true;

}

// Version 1

$('#alquilar').on('click',function(e){

	if(validar(e)){

		console.log($('#alquiler').serialize());
	//	$('#alquiler').submit();
		alert("El formulario se envio. Gracias");
	}	

});

// Borro el formulario y los mensajes de error

$('#limpiar').on('click',function(e){

	console.log("borré formulario");
	$('#errores').html("");

});






