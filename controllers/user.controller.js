'use strict'

const User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');

function save(req, res) {
  var user = new User();
  const params = req.body();
  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_USER';
  user.image = 'null';

  if (params) {

  }
}