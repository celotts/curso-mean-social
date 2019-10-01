'use strict';

var bcrypt = require("bcrypt-nodejs");
var User = require("../model/user");

function home(req, res) {
    res.status(200).send({
        message: 'Ruta a la raiz'
    });
}

function pruebas(req, res) {
    res.status(200).send({
        message: 'Acción de prueba en el servidor Node.js'
    });
}

function saveUSer(req, res) {
    var params = req.body;
    var user = new User();

    if (params.name && params.surname && params.nick && params.email && params.password) {
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'ROLE_USER';
        User.image = null;
        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;

            user.save((err, userStored) => {
                if (err) return res.status(500).send({ message: "Error al guardar usuario" });
                if (userStored) {
                    res.status(200).send({ user: userStored });
                } else {
                    res.status(400).send({ message: "No se ha registrado el usuario" })

                }
            })
        })
    } else {
        res.status(200).send({
            message: "Envia todos los campos necesario"
        });
    }

}
module.exports = {
    home,
    pruebas,
    saveUSer
}