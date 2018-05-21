$(document).ready(function(e){

	$.ajax({
	  method: "GET",
	  url: "http://mariabelenalegre.com/api-encuenta/api.php"
	  
	  })
	  
	  .done(function( response ) {
	    
	    console.log(response); // para ver que viene

	    let resultados = JSON.parse(response); // recupero los datos

		$.each(resultados,function(index,elem){

			console.log(elem);

			console.log(elem.enunciado);

			let preg = ``

			console.log(elem.respuestas);
		/*	
			let li = `<li><h2>${elem.name}</h2><p><span>${elem.email}</span></p><p>${elem.body}</p></li>`;
			console.log(li);
			ul.append(li);
		*/	
		});

	  });

});	  

function cargarEncuestas(){

	// Se recorre el json de preguntas y se cargan las preguntas con sus respuestas
	// Las respuestas tienen un check 
	// Poner un botón votar
	// Puede haber mas de una respuesta para una pregunta

}