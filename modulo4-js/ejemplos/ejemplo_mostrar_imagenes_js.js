var categoria1  = ['producto1.jpg','producto2.jpg','producto3.jpg']; // por cada categoria pones los nombres da las fotos

$(document).ready(function() {

	$('.menu')on('click',function(event){ // click en el submenu

      event.preventDefault();

      var categoria = $(this).data('cat');  // te quedas con el nombre de la categoria que coincide con lo que definiste arriba

      var resultados = $('#resultados'); // div donde está la tabla de resultados

      foreach(i=0;i<categoria.length;i++){

      	imagenURL = "imagenes/".categoria[i];

      	element += '<img src='.imagenURL.' alt="lala"/>'; // imagenes que creas (acá también podés poner texto) concatenar <p> o <div>

      }

      resultados.append(element); // todas las imagenes agregadas en el div resultado

    });
    
});  