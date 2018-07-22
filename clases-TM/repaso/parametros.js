let numeros = [1, 2, 3, 4, 5]

function mostrarDobles (nums) {
  nums = nums || [] // versión más corta de todo lo que está abajo comentado
  // if (!nums) {
  //   nums = []
  // }
  // o
  // if (typeof nums === 'undefined') {
  //   nums = []
  // }

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] * 2)
  }
}

mostrarDobles()