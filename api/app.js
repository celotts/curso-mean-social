'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var user_router = require("./routes/user");
//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", user_router)

module.exports = app;