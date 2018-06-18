
var agregar = $('#agregar');

$(document).on('click','#agregar',function(e){

	e.preventDefault();
	
	if($('#title').val().length == 0){

		alert('Debe completar el titulo');
	}else{

		$('#nuevo').submit();
	}	
});