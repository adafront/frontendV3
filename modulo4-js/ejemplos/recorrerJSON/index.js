// JSON con distintos valores para utilizar en la demo
var json = {'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3'};
     
// Obteniendo todas las claves del JSON
for (var clave in json){
  // Controlando que json realmente tenga esa propiedad
//  if (json.hasOwnProperty(clave)) {
    // Mostrando en pantalla la clave junto a su valor
    console.log("La clave es " + clave+ " y el valor es " + json[clave]);
//  }
}