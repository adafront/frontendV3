var tareas = [];

$('#btn-add').on('click',(e)=>{

	let tarea = $('#inputId').val();

	tareas.push(tarea); 

	limpiar();

	mostrarTareas();

});

/**
 *	Limpio el campo luego de agregar la tarea
 */	

function limpiar(){

	$('#inputId').val("");
}

/**
 *  Cargo las tareas del array
 */	

function mostrarTareas(){

	$('#lista').html(""); // primero se limpia la lista para que no se repitan los elementos

	tareas.forEach(elem => {

	let li = `<li> ${elem} </li>`; // Creo cada nodo de la lista a partir de la tarea del arreglo

	console.log(elem);

	$('#lista').append(li); 

	});

} 