const axios = require('axios')
const { apiUrl } = require('../config');

exports.getAll = function (token) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        console.log(data)
        return data;
    }, (err) => {
        console.log(err)
    })
}
exports.getById = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getTires = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/tires`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getLocation = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/location`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getOdometer = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/odometer`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getFuel = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/fuel`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getStateofcharge = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/stateofcharge`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.getDoors = function (token, id) {
    axios({
        method: 'get',
        url: `${apiUrl}vehicles/${id}/doors`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}

exports.updateDoorLock = function (token, id, command) {
    axios({
        method: 'post',
        url: `${apiUrl}vehicles/${id}/doors`,
        headers: { 'accept': 'application/json', 'authorization': 'Bearer ' + token },
        data: {
            'command': command
        }
    }).then((data) => {
        return data;
    }, (err) => {
        console.log(err)
    })
}
