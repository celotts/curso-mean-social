'use strict';

var User = require("../model/user");

function home(req, res){
    res.status(200).send({
        message: 'Ruta a la raiz'
    });
}

function pruebas (req, res){
    res.status(200).send({
        message: 'Acción de prueba en el servidor Node.js'
    });
}

module.exports = {
    home,
    pruebas
}