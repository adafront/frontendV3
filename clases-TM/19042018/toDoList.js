/*

var lista = $('#list');
function add(e){

	if(e.which == 13) {
        alert('You pressed enter!');
    }

	var inputValue = $('#inputId').val();
	var liItem = '<li>'+inputValue+'</li><button>ELiminar</button>';

	lista.append(liItem);
	$('#inputId').val('');


}


$(document).on('click','ul button', function(){
	var index = $('ul button').index(this);
	console.log(index);

	$('ul li')[index].remove();
	$('ul button')[index].remove();
})

$('#btn-add').on('click keypress',add);
    
*/

/******** opción Belén */
var listaArray = [];

function add2(){

	var inputValue = $('#inputId').val();
	var liItem = '<li id="'+listaArray.length+'">'+
	'<button class="borrar" data-id="'+listaArray.length+'"data-accion="borrar">X</button>'+
	'<button data-id="'+listaArray.length+'" data-accion="edit">Editar</button></li>';
	$('#lista').append(liItem);

	$('.borrar').on('click',function(e){
		$(this).parent().remove();
	});
}

	
	$('.borrar').on('click',function(e){
		$(this).parent().remove();
	});

	/*replico la funcion borrar o llamo al documento como a continuación */

	$(document).on('click','ul button',function(){
		var accion = $(this).data('accion');

		if(accion=='borrar'){
			$(this).parent().remove();
		}else{
			var id = $(this).data('id');
		}
	})

	$(document).on('keypress',function(e){

		console.log(e);

		if(e.keyCode == 13) {
	        alert('Enter');
	    }
	})


$('#btn-add').on('click',add2);