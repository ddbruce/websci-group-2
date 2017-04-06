const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to item.ts
*/

var itemSchema = new Schema({
  _id: {
    type: objectId,
    auto: true
  },
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