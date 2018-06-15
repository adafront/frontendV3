function sum(a, b = 0) {
  if (b) {
    return a + b
  } else {
    return function(b) {
      return a + b;
    }
  }
}

console.log(sum(2,3)) // 5
var add2 = sum(2)
console.log(add2(3)) // 5
