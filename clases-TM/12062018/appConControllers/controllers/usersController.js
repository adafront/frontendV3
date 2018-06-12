const usersService = require('../services/usersService')

const self = {}

self.usersList = function (req, res, next) {
  res.render('users', { title: 'Users', users: usersService.getUsers() });
}

self.newUser = function (req, res) {
  usersService.createUser(req.body);
  // una vez que agrego el usuario, le respondo al usuario con la nueva vista actualizada
  res.render('users', { title: 'Users', users: usersService.getUsers() });
}

self.getUser = function (req, res) {
  let data = usersService.getUser(parseInt(req.params.id))

  if (data) {
    res.render('user', { userData: data })
  }
  else {
    res.render('error', { message: 'El usuario no existe', error: {}})
  }
}

module.exports = self;