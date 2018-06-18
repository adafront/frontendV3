function isPalindrome(word) {
  word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g,"").toLowerCase();
  return word == word.split('').reverse().join('')
}

function isPalindrome2(palindQuizas){
  let mayus = palindQuizas.toUpperCase();
  var letters = /[a-z]/gi;
  var letrasSueltas = mayus.match(letters);
  var stringDerecho = letrasSueltas.join();

  var letrasSueltasReves = letrasSueltas.reverse();
  var stringReves = letrasSueltasReves.join();

  if (stringReves===stringDerecho){
      console.log("c'est un palindrome");
      return true;
  }else{
      console.log("ce n'est pas un palindrome");
      return false;
  }
}

console.log("neuquen isPalindrome: ", isPalindrome("neuquen"))
console.log("¡Atar, a la rata! isPalindrome: ", isPalindrome("¡Atar, a la rata!"))
console.log("nheuquen isPalindrome: ", isPalindrome("nheuquen"))

console.log("neuquen isPalindrome2: ", isPalindrome2("neuquen"))
console.log("¡Atar, a la rata! isPalindrome2: ", isPalindrome2("¡Atar, a la rata!"))
console.log("nheuquen isPalindrome2: ", isPalindrome2("nheuquen"))