const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreakfastSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: { type: Array, default: [] }
});

module.exports = Breakfast = mongoose.model('breakfast', BreakfastSchema);