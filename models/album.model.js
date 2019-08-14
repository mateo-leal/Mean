'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Squema;

var AlbumSquema = Squema({
  title: String,
  description: String,
  year: Number,
  image: String,
  artist: { type: Squema.ObjectId, ref: 'Artist' }
});

module.exports = mongoose.model('Album', AlbumSquema);