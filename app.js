'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Rutas
var userRoutes = require('./routes/user.router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', )

app.get('/', (req, res) => {
  res.status(200).send({message: 'Funcionando'})
});

module.exports = app;