const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: { type: Array, default: [] }
});

module.exports = Diner = mongoose.model('diner', DinerSchema);