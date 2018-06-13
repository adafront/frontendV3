const axios = require('axios')
// import axios from 'axios'

const service = {}

service.getRepositories = function (githubUser) {
  return axios
    .get(`https://api.github.com/users/${githubUser}/repos`)
    .then(function (res) {
      return res.data
    })
}

module.exports = service;