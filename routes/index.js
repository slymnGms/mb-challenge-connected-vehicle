const { clientID } = require('../config');
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.render('index', { id:clientID })
});

module.exports = router;