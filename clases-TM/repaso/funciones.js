const MAX_EDAD = 40

const personas = [
  { nombre: 'Ezequiel', edad: 80 },
  { nombre: 'Macarena', edad: 50 },
  { nombre: 'Agustina', edad: 41 },
  { nombre: 'Dinda', edad: 20 }
]

// FOR EACH

// function fn (persona) {
//   console.log(`Hola ${persona.nombre}`)
// }

for (var i = 0; i < personas.length; i++) {
  console.log(`Hola ${personas[i].nombre}`)
  // fn(personas[i])
}

personas.forEach(p => console.log(`Hola ${p.nombre}`))

// MAP

console.log('MAP')

// ['Ezequiel', 'Macarena', 'Agustina', 'Dinda']
let nombres = []

for (var i = 0; i < personas.length; i++) {
  nombres.push(personas[i].nombre)
}

console.log('sin map: ', nombres)

// personas.map(function (p) { return p.nombre })
let nombres2 = personas.map(p => p.nombre)
console.log('con map: ', nombres2)

for (var i = 0; i < nombres.length; i++) {
  console.log(nombres[i])
}

// console.log(personas, nombres)

personas
  .map(p => p.nombre)
  .forEach(n => console.log(n))

// console.log(nombres2)

const numeros = [1, 2, 3, 4, 5, 6, 7]
const dobles = []

for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2)
}

console.log(dobles)

const double = n => n * 2
// function double (n) { return n * 2 }

console.log(numeros.map(double))

// function map (fn) {
//   let newArr = []
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(fn(this[i]))
//   }
//   return newArr;
// }

// FILTER

const mayoresDe40 = []

for (var i = 0; i < personas.length; i++) {
  if (personas[i].edad > MAX_EDAD) {
    mayoresDe40.push(personas[i])
  }
}

console.log(mayoresDe40)

console.log(personas.filter(p => p.edad > MAX_EDAD))

// EJEMPLO

personas
  .filter(p => p.edad > MAX_EDAD)
  .map(p => p.nombre)
  .forEach(p => console.log(p))