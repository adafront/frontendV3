$(document).ready(function(e){

	$.ajax({
	  method: "GET",
	  url: "https://jsonplaceholder.typicode.com/posts/1/comments"
	  
	  })
	  
	  .done(function( response ) {
	    console.log(response); // para ver que viene

	    // Acá va el codigo para mostrar los resultados
	    var ul = $('#resultados');
	    console.log(ul);

		$.each(response,function(index,elem){

			console.log(elem);

			let li = `<li><h2>${elem.name}</h2><p><span>${elem.email}</span></p><p>${elem.body}</p></li>`;
			console.log(li);
			ul.append(li);

		});

	  });

});	  