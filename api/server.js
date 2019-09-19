'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_socila', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )
.then( () => {
    console.log("La conexión a la base de datos curso_mean_social se ha realizado satisfactoraimente...")
})
.catch(err => console.log(err))