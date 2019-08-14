'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Squema;

var ArtistSquema = Squema({
  name: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Artist', ArtistSquema);