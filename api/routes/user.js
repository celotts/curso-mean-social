'use strict'

var express = require("express");
var USerController = require('../controllers/user');

var api = express.Router();

api.get('/home', USerController.home);
api.get('/pruebas', USerController.pruebas);
api.post('/register', USerController.saveUSer);
module.exports = api;