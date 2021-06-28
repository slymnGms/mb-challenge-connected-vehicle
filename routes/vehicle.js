var express = require('express');
var router = express.Router();

var vehicle_controller = require('../controllers/vehicleController');

router.get('/', vehicle_controller.index);
router.get('/:id', vehicle_controller.show);
router.get('/:id/doors/:command', vehicle_controller.lockDoors);

module.exports = router;