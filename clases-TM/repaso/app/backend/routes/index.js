const axios = require('axios');
var express = require('express');
var router = express.Router();

const BASE_API = 'https://jsonplaceholder.typicode.com'
const API_USERS = '/users'
const API_IMAGES = 'https://picsum.photos/list'

const internet = () => Math.random() >= 0.5
const notInternet = () => !internet()

router.get('/users', function(req, res) {
  // fetch()
  axios
    .get(`${BASE_API}${API_USERS}`)
    .then(response => response.data)
    .then(async users => {
      let usuariosModificados = []

      for (let i = 0; i < users.length; i++) {
        let u = users[i];

        delete u.address
        delete u.company

        response = await axios.get(API_IMAGES)

        u.picture = response.data[ Math.round(Math.random() * response.data.length) ]

        usuariosModificados.push(u)
      }

      res.json(usuariosModificados)
      // axios
      //   .get(API_IMAGES)
      //   .then(response => {
      //     let usuariosModificados = users.map(u => {
      //       delete u.address
      //       delete u.company
      //       u.picture = response.data[3]
      //       return u
      //     })
      //     res.json(usuariosModificados)
      //   })
    })
    .catch(e => {
      if (e.code === 'ENOTFOUND' && notInternet()) {
        res.status(503).send('no hay internet loco')
      } else if (e.code === 'ENOTFOUND' && internet()) {
        res.status(502).send('la api no me quiere responder')
      } else {
        res.status(500).send('algo está mal')
      }
    })
});

module.exports = router;
