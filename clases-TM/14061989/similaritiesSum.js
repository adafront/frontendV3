function similaritiesSum(arr) {
  return arr
    .map(str => Array.from(new Array(str.length), (v, i) => str.slice(i)))
    .map((arr2, i) => arr2.reduce((t, v) => t + equalsChars(arr[i], v), 0))
}

function equalsChars (str1, str2) {
  // es recursiva
  return str1.slice(0, 1) == str2.slice(0, 1) && str1.length && str2.length ? 1 + equalsChars(str1.slice(1), str2.slice(1)) : 0
}

console.log(similaritiesSum(["ababaa"]))