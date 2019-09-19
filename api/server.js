'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = "3800";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_socila', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )
.then( () => {
    console.log("La conexión a la base de datos curso_mean_social se ha realizado satisfactoraimente...")
    app.listen( port, () => {
        console.log("Servidor corriendo en hhtp://localhost:3800")
    })
})
.catch(err => console.log(err))