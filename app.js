// This file will be used for configuring the app, and that alone.

var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
