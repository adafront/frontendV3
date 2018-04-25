let resultado = localStorage.getItem("dato");	
	console.log(resultado);	

$('#guardar').on('click',function(e){

	let dato = $('#nombre').val();
	localStorage.setItem("dato", dato);

	let resultado = localStorage.getItem("dato");	
	console.log(resultado);	

});








