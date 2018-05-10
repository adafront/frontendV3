$('#ejes').hide();

$('#tipo').on('change',e=>{

	let option = $('#tipo').val();

	if(option == "2"){

		$('#ejes').show();
	}

});


$('#cargar').on('click',e=>{

	let vehiculo;

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form

	console.log(patente);

	let tipo = $('#tipo').val(); // me quedo con la opcion del select

	switch(tipo){

		case '1': 
					vehiculo = new Auto(patente);	
					break;
		case '2': 
					let ejes = $('#ejes').val();
					vehiculo = new Camion(patente,ejes);
					vehiculo.acelerar(20);
					break;
		default: 
				alert("Elija una opcion valida");
				break;

	}

	console.log(vehiculo); // muestro el objeto completo

	console.log(vehiculo.patente);

});






