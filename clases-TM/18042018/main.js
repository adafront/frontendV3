var contador = 0;
function agregar(){
	var input = $('#add-input').val();
	$('ul').append('<li id="T'+contador+'"><a data-id="T'+contador+'">'+input+'<span>Borrar</span></a></li>');
}

$('#add-btn').on('click',agregar);

$('.borrar-btn').on('click',function(e){
	var idT = $(this).data('id');
	$('#'idT).hide();//forma #T1
});