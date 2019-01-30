const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Item schema
const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
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
  },
  table_id: {
    type: String,
  },
});

module.exports = Item = mongoose.model('items', ItemSchema);