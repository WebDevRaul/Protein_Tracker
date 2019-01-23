const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Item schema
const ItemSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  protein: {
    type: String,
    required: true
  },
  carbohydrates: {
    type: String,
    required: true
  },
  fat: {
    type: String,
    required: true
  },
  calories: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('items', ItemSchema);