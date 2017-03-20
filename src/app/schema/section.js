const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to section.ts
*/

var sectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: Array
});

module.exports = mongoose.model('Section', sectionSchema);
