var entradas = []; // aca se cargas las entradas

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
	ul.setAttribute('id','posts');


	if(entradas.length > 0){

		m.innerHTML = "";

	    for(var i=0; i < entradas.length; i++){
	        
	        var li = document.createElement('li');       
	        var img = document.createElement('img');
	        img.src = "imgs/conejo.png";
	        img.classList.add('thumb');
	        li.appendChild(img);
	        var texto = document.createElement('p');
	        texto.textContent = entradas[i];
	        li.appendChild(texto);
	        ul.appendChild(li);
	    }
	}
	 m.appendChild(ul);   
}

/**
 *	Carga entradas desde el formulario
 *  @params no parametros
 *	void
 **/


function publicar(){
	var lista = document.getElementById('posts');
	var entrada = document.getElementById('entrada');
	var texto = entrada.value;
	entradas.push(texto);


	       	var li = document.createElement('li');       
	        var img = document.createElement('img');
	        img.src = "imgs/conejo.png";
	        img.classList.add('thumb');
	        li.appendChild(img);
	        var t = document.createElement('p');
	        t.textContent = entradas[entradas.length-1];
	        li.appendChild(t);
	        lista.appendChild(li);

	console.log(texto);
	//cargarMuro(muro);

}

cargarDatosPersonales(arrayNombres);
cargarListaImagenes(amigos,amigosDiv);
cargarMuro(muro);

var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);

//document.querySelector('body').appendChild(nombre);



