const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Table schema
const TableSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  product_name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  type: {
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
    required: true
  },
  temp_protein: {
    type: String
  },
  temp_calories: {
    type: String
  },
  temp_fat: {
    type: String
  },
  temp_carbohydrates: {
    type: String
  },
  temp_quantity: {
    type: String
  }
});

module.exports = Table = mongoose.model('tables', TableSchema);