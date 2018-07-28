var express = require('express')
var router = express.Router()
const axios = require('axios')

const misDatos = {
  nombre: 'Ezequiel',
  apellido: 'Gonzalez',
  trabajo: 'Ada',
  edad: 29,
  email: 'ezequiel@adaitw.com.ar',
  direccion: 'Naon 2469',
  sitioweb: 'https://ada.com.ar',
  telefono: '1553235303'
}

const BASE_URL_GITHUB = 'https://api.github.com'
const GITHUB_USER = 'ezeggonzalez'

router.get('/me', function (req, res) {
  res.json(misDatos)
});

router.get('/repositorios', async function (req, res) {
  // axios
  //   .get(`${BASE_URL_GITHUB}/users/${GITHUB_USER}/repos`)
  //   .then(response => response.data)
  //   .then(data => {
  //   })
  //   .catch()

  try {
    let response = await axios.get(`${BASE_URL_GITHUB}/users/${GITHUB_USER}/repos`)
    let repositorios = response.data

    let repositoriosFinal = repositorios.map(repositorio => {
      return {
        id: repositorio.id,
        nombre: repositorio.name,
        url: repositorio.html_url
      }
    })

    res.json(repositoriosFinal)
  } catch (e) {
    if (e.response && e.response.status) {
      if (e.response.status === 404) {
        res.status(404).json({
          message: 'El usuario de Github no existe.'
        })
      } else if (e.status === 500) {
        res.status(500).json({
          message: 'Hubo algún error loco en github.'
        })
      } else {
        res.status(503).json({
          message: 'Algo pasó con Github.'
        })
      }
    } else {
      console.log(e);

      res.status(500).json({
        message: 'Error interno del servidor.'
      })
    }
  }
})

module.exports = router;
