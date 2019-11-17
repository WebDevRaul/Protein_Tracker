const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnackSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: { type: Array, default: [] }
});

module.exports = Snack = mongoose.model('snack', SnackSchema);