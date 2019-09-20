'user strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String,
    imagn : String
});

module.exports = mongoose.model("User", UserSchema);