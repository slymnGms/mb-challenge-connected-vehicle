const { clientID, clientSecret } = require('../config');
var buffer = require('buffer').Buffer;
const axios = require('axios')

exports.redirect = function (req, res) {
    const requestToken = req.query.code
    axios({
        method: 'post',
        url: 'https://id.mercedes-benz.com/as/token.oauth2',
        headers: { 'content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + buffer.from(clientID + ":" + clientSecret).toString('base64') },
        data: `grant_type=authorization_code&code=${requestToken}&redirect_uri=http://localhost:8080/oauth/redirect`
    }).then((response) => {
        const accessToken = response.data.access_token
        console.log(accessToken);
        req.session.a_Token = accessToken
        res.redirect('/vehicles')
    }, (err) => {
        console.log(err);
    })
}