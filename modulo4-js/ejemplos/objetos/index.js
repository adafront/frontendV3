class Perro {

  /** Plan A **/	

  constructor ( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
    this._edad = 2;
    this._castrado = false;
  }

  // Debe definirse el constructor o con la palabra constructor 
  // o utilizando el mismo nombre de la clase

/*	  
  Perro( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
  }
*/

 // setters y getters	

  set nombre ( value ) {
    this._nombre = value;
  }

  set raza(value){
  	this._raza = value;
  }

  /**
  *   Retorna siempre una cadena de caracteres	
  *
  **/

  toString () {
    return this._nombre + ', ' + this._raza;
  }

  getRaza (){
  	return this._raza;
  }

  /**
  	* Returns int 
  **/ 

  getEdad(){
  	return this._edad;
  }
}

// Creacion de objetos
let p1 = new Perro("Fido","Bull terrier");
let p3 = new Perro();


let salida = p1.toString(); 

console.log(salida);












