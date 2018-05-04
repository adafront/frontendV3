// Creo un objeto producto vacio para guardar la información
var producto = {};

var carritoStorage = localStorage.getItem("carrito");

if(carritoStorage == null){

	var carrito = [];
}else{
	carrito = JSON.parse(carritoStorage).productos;
}

/***
  * Verifico si ya existe el producto en el carrito
  * @params producto
  * Return boolean | int
***/  
function chequearExistencia(producto){

	let cod = producto.codigo; // variable auxiliar
	let encontrado = false;
	let i = 0;

	while(!encontrado && i<carrito.length){ // !(encontrado == true)

		if(carrito[i].producto.cod == cod){
			 return i; // devuelvo la posicion
		}
		i++;
	}
	// devuelve false si no lo encontro
	return encontrado;
}


$('.add').on('click',function(e){

	let hermanos = $(this).siblings();

	// Recupero la información del HTML

 	producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
	producto.precio = hermanos[2].innerText;
	producto.stock = hermanos[3].innerText;
	producto.cod = hermanos[4].innerText;

	if(parseInt(producto.stock) >= parseInt(hermanos[5].value)){	
		
		let pos = chequearExistencia(producto);

		if(!pos){

			// Creo un objeto item, para agregar luego al carrito

			var item ={
				cantidad : parseInt(hermanos[5].value),
				producto : producto
			}

			console.log(item);

			carrito.push(item);
		
		}else{

			carrito[pos].cantidad += parseInt(hermanos[5].value);

		}	

		let jsonCarrito = {'productos': carrito};
		localStorage.setItem('carrito',JSON.stringify(jsonCarrito));
	
	}else{
		alert("No se agregó el producto, no hay stock suficiente.");
	}	

});

/**
  * Devuelve el monto total del carrito
  **/

function calcularSubtotal(){

	let subtotal = 0;

	for(i=0;i<carrito.length;i++){

		subtotal += carrito[i].cantidad * parseFloat(carrito[i].producto.precio);
	}

	return subtotal;
}
















