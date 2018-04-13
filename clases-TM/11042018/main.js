/*1 create/apend */

var parrafo = document.createElement('p');
parrafo.textContent = 'Hola soy un párrafo';
var div = document.createElement('div');
div.appendChild(parrafo);

document.querySelector('body').appendChild(div);




/* crear lista dinámica */

/*var nombres = ['Pepa','José','Juliana','Luna','pedro','carla','maria','jimena','leydi','kevin'];
var body = document.querySelector('body');
          var ul = document.createElement('ul');
          for(var i=0; i < nombres.length; i++){
            var li = document.createElement('li');
                li.textContent = nombres[i];
                ul.appendChild(li);
          }
            body.appendChild(ul);
            console.log(ul);
*/