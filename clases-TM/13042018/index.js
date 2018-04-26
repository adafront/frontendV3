/*** Variables globales **/
var ciudades = [
				{
				 "nombre":"Bahía Blanca",
				 "provincia":1
				},
				{"nombre":"Villa Crespo","provincia":0},
				{"nombre":"Chivilcoy","provincia":1}
			   ];


var btnEnviar = document.getElementById('enviar');
var comboProv = document.getElementById('provs');
console.log(ciudades);

/*** Funciones ***/

function cargarProvincias(){

	var provincias = ["CABA","Bs As","Cordoba"];
	console.log(provincias);
	
	for(i=0;i<provincias.length;i++){
		let op = document.createElement('option');
		console.log(op);
		op.value = i;
		op.innerHTML = provincias[i];
		comboProv.appendChild(op);
	}
}

function cargarCiudades(){

	var provId = comboProv.value;

	var comboCity = document.getElementById('city');
	for(i=0;i<ciudades.length;i++){
		if(ciudades[i].provincia == provId){
			let op = document.createElement('option');
			console.log(ciudades[i].provincia);
			op.value = i;
			op.innerHTML = ciudades[i].nombre;
			comboCity.appendChild(op);	
		}
	}
}

function validarMail(mail){

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
  	return true; 
  } else {
 	return false;  
  }
}

function validarFormulario(){
	
	var valido = false;
	var obligatorios = document.getElementsByClassName('obligatorio');
	var obLabels = document.getElementsByClassName('obLabel');
	console.log(obligatorios);

	for (var i = 0; i< obligatorios.length; i++) {
		if(obligatorios[i].value.length == 0){
			obLabels[i].innerHTML = "Campo obligatorio";
		}
	}	
		
	var	mail = document.getElementById('email');
	if(mail.value.length > 0){

		if(!validarMail(mail)){
			var emailError = document.getElementById('emailError');
			emailError.textContent = "Formato de email no valido";
			emailError.classList.add('error2');
			console.log("formato invalido");
		}

		if(!validarMail(mail)){
			var emailError = document.getElementById('emailError');
			emailError.innerHTML = 'Formato de<span class="error2">email</span>no valido';
			console.log("formato invalido");
		}
	}

	if(valido){ 
		var form = document.getElementById('inscripcion');
		form.submit;	
	 }
}

function limpiar(){
	var inputs = document.getElementsByTagName('input');
	console.log(inputs);
	var inputsArray = Array.from(inputs);
	console.log(inputsArray);
	inputsArray.forEach(function(e){
		//console.log(e);
		if(e.type == 'checkbox'){
			e.checked = false;	
		}else{
			e.value = " ";
		}
	});

	var selects = document.getElementsByTagName('select');

	Array.from(selects).forEach(function(e){

			e.value = "-1";
	});
}

var btnRem = document.getElementById('btn-limpiar');
btnRem.addEventListener('click',limpiar);
/*** Llamadas a funciones ***/

cargarProvincias();

 btnEnviar.addEventListener('click',validarFormulario);
comboProv.addEventListener('change',cargarCiudades);

