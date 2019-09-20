'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = new Schema({
    text: String,
    file: String,
    create_at: String,
    user: { type: Schema.ObjectId, ref: 'User'},
    password: String,
    role: String,
    imagn : String
});

module.exports = mongoose.model("Publication", PublicationSchema);