'user strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User'},
    followes: { type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Follow", FollowSchema);