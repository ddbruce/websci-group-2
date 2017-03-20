const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to menu.ts
*/

var menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sections: Array
});

module.exports = mongoose.model('Menu', menuSchema);
