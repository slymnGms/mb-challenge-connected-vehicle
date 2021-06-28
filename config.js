const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    apiUrl: process.env.apiUrl
};
