'use strict'

var mongoose = require('mongoose');
var Squema = mongoose.Squema;

var SongSquema = Squema({
  number: Number,
  name: String,
  duration: String,
  file: String,
  album: { type: Squema.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Song', SongSquema);