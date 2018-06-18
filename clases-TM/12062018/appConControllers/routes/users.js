var express = require('express');
var router = express.Router();
var usersController
  = require('../controllers/usersController');

router.get('/listjson', usersController.usersListJson)
router.get('/listjson2', usersController.usersListJson2)

router.get('/', usersController.usersList);
router.get('/:id', usersController.getUser);
router.post('/', usersController.newUser);

module.exports = router;
