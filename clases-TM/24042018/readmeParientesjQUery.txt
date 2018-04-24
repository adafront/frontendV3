 // Elemento actual

 $(this)

 // Obtener el padre

(Obtengo el nodo que me contiene)

 $(this).parent()

 // Obtengo los ancentros

 (Obtengo un arreglo de nodos con todos

 los elementos de mayor jerarquia)

 $(this).parents()

 // Obtengo hermanos

Arreglo de nodos que tienen el mismo padre
que el elemento actual
 
 $(this).siblings()

 // Próximo elemento

 $(this).next()

 // Elemento anterior

 $(this).prev();

 // Hijos

(Devuelve arreglo de nodos con los hijos)

$(this).children()

$(this).parent() // padre

$(this).parents().first() // padre

$(this).children().first()

---- Filtros ---

// Aplica cambios a todos los elementos
que no cumplan con el parametro de la 
funcion

.not() 

$( "li" ).not( document.getElementById( "notli" ) )
  .css( "background-color", "red" );

//

.filter('div')

$(this).css('color','pink')

$(this).addClass('nombreClase')
$(this).removeClass('nombreClass')
$(this).toggleClass('clase1 clase2')

$(this).attr('id')
$(this).data('nombre')





