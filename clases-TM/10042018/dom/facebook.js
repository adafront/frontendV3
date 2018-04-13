var amigosDiv = document.getElementById('amigos');

var arrayNombres = ["Pepa", "Holandesa", "Me gustan los muffins"];

var oveja =["Lala","oveja.jpg"];
var conejo = ["Pepito","pepito.png","Zanahorias"];

var amigos = [oveja,conejo];

console.log("Nombre del conejo: "+amigos[1][0]);

var i,j;

for(i=0;i<amigos.length;i++){

		//console.log(amigos[i]);
		for(j=0;j<amigos[i].length;j++){
			console.log(amigos[i][j]+",");
		}
}



function cargarDatosPersonales(arrayNombres){

	var nombre = document.createElement('h1');
	nombre.textContent = arrayNombres[0];

	var nacionalidad = document.createElement('h2');
	nacionalidad.textContent = arrayNombres[1];

	var resumen = document.createElement('p');
	resumen.textContent = arrayNombres[2];

	var dpDiv = document.getElementById('datosPerfil');
	dpDiv.appendChild(nombre);
	dpDiv.appendChild(nacionalidad);
	dpDiv.appendChild(resumen);

}

/**
 *	muestra en el HTML una lista de imagenes
 *	@params lista | array, padre | nodo HTML
 *	void 
**/ 

function cargarListaImagenes(lista,padre){

		var i;
				for(i=0;i<lista.length;i++){	
				var img = document.createElement('img');
				img.src = "imgs/"+lista[i][1];
				img.style.width = '80px';
        img.style.height = '80px';
				console.log(img.src);
				padre.appendChild(img);
		}		
}

var muro = document.getElementById('muro');

/**
	* Carga elementos del muro
	* @params m | nodo padre
	* void
**/	


function cargarMuro(m){

		var ul = document.createElement('ul');

    for(var i=0; i < 3; i++){
        
        var li = document.createElement('li');       
        var img = document.createElement('img');
        img.src = "imgs/conejo.png";
        img.classList.add('thumb');
        li.appendChild(img);
        var texto = document.createElement('p');
        texto.textContent = "Estoy feliz de vacaciones";
        li.appendChild(texto);
        ul.appendChild(li);
    }
    m.appendChild(ul);

}

cargarDatosPersonales(arrayNombres);
cargarListaImagenes(amigos,amigosDiv);
cargarMuro(muro);
//document.querySelector('body').appendChild(nombre);


