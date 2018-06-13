const githubService = require('./githubService')

const service = {}

const users = [
  { id: 1, name: 'aaa', githubUser: 'ezeggonzalez' },
  { id: 2, name: 'bbb', githubUser: 'adafront' },
  { id: 3, name: 'ccc', githubUser: 'natiguida' }
]

service.getUsers = function () {
  return users;
}

service.getUser = function (id) {
  var user = users.find((u) => u.id === id)

  return githubService
    .getRepositories(user.githubUser)
    .then(function (repositories) {
      user.repositories = repositories;
      return user;
    })
}

service.createUser = function (user) {
  // le agrego el ID al usuario, único... tomo el más alto que tengo actualmente, y lo incremento en 1
  user.id = Math.max(...users.map(u => u.id)) + 1
  users.push(user)
}

module.exports = service