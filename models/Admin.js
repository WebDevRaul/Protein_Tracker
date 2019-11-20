const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const items = require('../routes/api/utils/Items');

const AdminSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: { type: Array, default: [...items]}
});

module.exports = Snack = mongoose.model('snack', AdminSchema);