var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VeloGears' });
});

router.get('/register', function (req, res) {
    res.render('register');
});

router.post('/register', function (req, res) {
    var user = req.body;
    models.User.create({
        username: user.username,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }).then(function () {
        res.redirect('/');
    })
});

module.exports = router;