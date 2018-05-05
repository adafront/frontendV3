class Perro {

  constructor ( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
  }

  set nombre ( value ) {
    this._nombre = value;
  }

  toString () {
    return this._nombre + ', ' + this._raza;
  }
}

// Creacion de objetos
let p1 = new Perro("Fido","Bull terrier");
let p2 = new Perro();


p2.toString(); 

console.log(p1.toString());