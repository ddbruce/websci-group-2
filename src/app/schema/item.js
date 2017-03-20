const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to item.ts
*/

var itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  isVegetarian: Boolean,
  isVegan: Boolean,
  isGlutenFree: Boolean,
  calories: Number
});

module.exports = mongoose.model('Item', itemSchema);
