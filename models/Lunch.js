const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LunchSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: { type: Array, default: [] }
});

module.exports = Lunch = mongoose.model('lunch', LunchSchema);