//JSON (standard de comunicacion entre procesos)

// origenes es un array de objetos literales

let origenes = [{id:1,nombre:'AEP'},
				{id:2,nombre:'EZE'},
				{id:3,nombre:'MIS'}
			   ];

// Objeto JSON 

let origenesObj = {

			'origenes':origenes // acá aun hay un array
}

// lo convierto en un json
let JSONOrigenes = JSON.stringify(origenesObj);				 

// Como recorro el JSON ? 

let select = $('#select');

// Como vuelco el JSON al select

let resultado = JSON.parse(JSONOrigenes);

for(i=0;i<resultado.origenes.length;i++){

	let option = `<option value="${resultado.origenes[i].id}">
				  ${resultado.origenes[i].nombre}</option>`;
	select.append(option);
}
















