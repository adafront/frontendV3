$('#btn-add').on('click',(e)=>{

	let tarea = $('#inputId').val();

	//var li = '<li>' + tarea + '</li>';

	var li = `<li> ${tarea} </li>`; // Versión ECMA6

	$('#lista').append(li); 

	limpiar();

});

/**
 *	Limpio el campo luego de agregar la tarea
 */	

function limpiar(){

	$('#inputId').val("");
}