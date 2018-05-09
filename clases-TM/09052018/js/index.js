$('#cargar').on('click',e=>{

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form

	console.log(patente);

	let auto = new Auto(patente); // creo un objeto auto

	console.log(auto); // muestro el objeto completo

	console.log(auto.patente); // muestro el atributo patente

});