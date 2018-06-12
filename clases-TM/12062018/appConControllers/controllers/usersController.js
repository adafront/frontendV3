const self = {}

self.usersList = function (req, res, next) {
  res.render('users', { title: 'Users' });
}

self.newUser = function (req, res) {
  console.log(
    req.body,
    req.query,
    req.params
  )
  res.status(500).send('todo ok')
}

module.exports = self;