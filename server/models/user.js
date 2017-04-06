const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
    _id: { type:objectId, auto: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    menus: Array
});

module.exports = mongoose.model("User", userSchema);