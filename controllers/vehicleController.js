const service = require('../services/vehicles')

exports.index = function (req, res) {
    const vehicles = service.getAll(req.session.a_Token);
    res.render('vehicles', { vehicles: vehicles });
}

exports.show = function (req, res) {
    const vehicle = service.getById(req.session.a_Token, req.params.id)
    const doors = service.getDoors(req.session.a_Token, req.params.id)
    const fuel = service.getFuel(req.session.a_Token, req.params.id)
    const location = service.getLocation(req.session.a_Token, req.params.id)
    const odometer = service.getOdometer(req.session.a_Token, req.params.id)
    const charge = service.getStateofcharge(req.session.a_Token, req.params.id)
    const tires = service.getTires(req.session.a_Token, req.params.id)
    const doorCommand = doors.doorlockstatusfrontleft.value == 'UNLOCKED' ? 'LOCK' : 'UNLOCK';
    res.render('vehicle', {
        vehicle: vehicle,
        doors: doors,
        fuel: fuel,
        location: location,
        odometer: odometer,
        charge: charge,
        tires: tires
    });
}
exports.lockDoors = function (req, res) {
    service.updateDoorLock(req.session.a_Token, req.params.id, req.params.command)
    res.redirec(`/vehicles/${req.params.id}`);
}