var express=require('express');
var router=express.Router();

var auth_controller=require('../controllers/authController');

router.get('/redirect',auth_controller.redirect);

module.exports = router;