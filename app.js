const express = require('express')
const app = express()
const session = require('express-session')

var path = require("path");
var __dirname = path.resolve();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var vehicleRouter = require('./routes/vehicle');

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }))

app.use('/', indexRouter)
app.use('/oauth', authRouter)
app.use('/vehicles', vehicleRouter)

app.listen(8080)
