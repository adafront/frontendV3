function fooBar (num) {
  var numeros = [];

  for (var i = 1; i <= num; i++) {
    numeros[i - 1] = i

    if (i % 3 === 0) {
      numeros[i - 1] = "Foo"
    }

    if (i % 5 === 0) {
      numeros[i - 1] = "Bar"
    }

    if (i % 5 === 0 && i % 3 === 0) {
      numeros[i - 1] = "FooBar"
    }
  }

  return numeros;
}

function fooBar2 (num) {
  var numeros = [];

  for (var i = 1; i <= num; i++) {
    numeros[i - 1] = i

    if (i % 5 === 0 && i % 3 === 0) {
      numeros[i - 1] = "FooBar"
    } else if (i % 3 === 0) {
      numeros[i - 1] = "Foo"
    } else if (i % 5 === 0) {
      numeros[i - 1] = "Bar"
    } else {
      numeros[i - 1] = i
    }
  }

  return numeros;
}

function fooBar3 (num) {
  return Array
    .from({ length: num }, (v, i) => i + 1)
    .map(v => `${v % 3 === 0 ? 'Foo' : ''}${v % 5 === 0 ? 'Bar' : ''}` || v)
}

function fooBar4 (num) {
  return Array
    .from({ length: num }, (v, i) => i + 1)
    .map(i => (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}

function fooBar5 (num) {
  var numeros = [];

  for (i = 1; i <= num; i++) numeros.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)

  return numeros;
}

console.log(fooBar(15))
console.log(fooBar2(15))
console.log(fooBar3(15))
console.log(fooBar4(15))
console.log(fooBar5(15))