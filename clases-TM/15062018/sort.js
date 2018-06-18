const LONGITUD_ARRAY = 50

const burbujeo = arr => {
  console.time('burbujeo');

  const n = arr.length;

  for (let i = 0; i < n; i++ ) {
    for (let j = 0; j < n - 1 - i; j++ ) {
      if (arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }

  console.timeEnd('burbujeo');
  return arr;
};

const burbujeoMejorado = arr => {
  console.time('burbujeoMejorado');

  const n = arr.length;
  let desordenado = true;

  for (let i = 0; i < n && desordenado; i++ ) {
    desordenado = false;
    for (let j = 0; j < n - 1 - i; j++ ) {
      if (arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        desordenado = true;
      }
    }
  }

  console.timeEnd('burbujeoMejorado');
  return arr;
};

var arr = Array.from({length: LONGITUD_ARRAY}, () => Math.floor(Math.random() * LONGITUD_ARRAY));

console.log('Desordenado: ', arr.join(', '))
console.log(" ----- ")
console.log('Ordenado Burbujeo: ', burbujeo(arr).join(', '))
console.log(" ----- ")
console.log('Ordenado Burbujeo Mejorado: ', burbujeoMejorado(arr).join(', '))