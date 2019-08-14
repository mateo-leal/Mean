'use strict'

var express = require('express');
var UserController = require('../controllers/user.controller');

var api = express.Router();

api.get('/');

module.exports = api;