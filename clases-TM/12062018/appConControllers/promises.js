const axios = require('axios')

var superObjeto = {}

var promise = axios.get('http://localhost:3000/users/listjson')

var promise2 = promise.then(function (res) {
  return res.data;
})

var promise3 = promise2.then(function (losDatos) {
  return {
    count: 3,
    datos: losDatos
  };
})

promise3.then(function (res) {
  console.log(res)
})