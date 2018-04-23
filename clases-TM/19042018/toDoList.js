
/*var lista = $('#list');
function add(){
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

$('#btn-add').on('click',add);


/******** opción Belén */
var listaArray = [];

function add2(){
	var inputValue = $('#inputId').val();
	var liItem = '<li id="'+listaArray.length+'">t'+
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


$('#btn-add').on('click',add2);