// Creo un objeto producto vacio para guardar la información
var producto = {};


$('.add').on('click',function(e){

	let hermanos = $(this).siblings();

	// Recupero la información del HTML

	producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
	producto.precio = hermanos[2].innerText;
	
	// Creo un objeto item, para agregar luego al carrito

	var item ={
		cantidad : hermanos[3].value,
		producto : producto
	}
		
	console.log(item);

});


