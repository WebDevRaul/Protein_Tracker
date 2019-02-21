const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DailySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  calories: {
    type: String,
    required: true
  },
  protein: {
    type: String,
    required: true
  },
  fat: {
    type: String,
    required: true
  },
  carbohydrates: {
    type: String,
    required: true
  },
});

module.exports = Daily = mongoose.model('daily', DailySchema);