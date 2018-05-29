var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


router.get('/', function (req, res) {
  res.render('index', { title: 'Hola', message: 'mi primera app con Express!!!'});
});

/*
router.get("/", (req, res) => {
    res.render("index", {
        user: req.user
    });
});
*/
module.exports = router;
