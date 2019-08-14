'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Squema;

var UserSquema = Squema({
  name: String,
  surname: String,
  email: String,
  password: String,
  role: String,
  image: String
});

module.exports = mongoose.model('User', UserSquema);