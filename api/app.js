'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.status(200).send({
        message: 'Ruta a la raiz'
    })
})
app.get('/pruebas', (req, res) =>{
    res.status(200).send({
        message: 'Acción de prueba en el servidor Node.js'
    });
})
//export
module.exports = app;