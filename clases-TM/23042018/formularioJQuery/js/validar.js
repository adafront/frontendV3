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

		// Pone el foco en el input
		$('#nombre').focus();
		// Cambio el color del borde
		$('#nombre').css('border','red');
		// Agrego la clase error
		$('#nombre').addClass('error');

		$('#nombre').removeClass('error');
		
		// Alterna la clase
		$('#nombre').toggleClass('error');
		
	/*	
		$.each(errores,function(indice,elemento){

			elemento.textContent = "Campo obligatorio";
			console.log(elemento);

		});
	*/

		errores.html("Hay campos sin completar");
		
	

/* Version 1 
	var pelis = Array.from($('.genero'));

	pelis.forEach(function(elemento,indice){

		if(elemento.checked){
			console.log("Elegiste esta opcion");
		}

	});

/* Version 2 */

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

// Version 2
/*
$('#formulario').on('submit',function(e){

		validar(e);
});
*/






