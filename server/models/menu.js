const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to menu.ts
*/

var menuSchema = new Schema({
  _id: { type: objectId, auto:true },
  name: {
    type: String,
    required: true
  },
  description: String,
  css: String,
  sections: [{ type: objectId, ref: 'Section' }]
});

module.exports = mongoose.model('Menu', menuSchema);
