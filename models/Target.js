const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TargetSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  cal: { type: String, trim: true, default: '0' },
  prot: { type: String, trim: true, default: '0' },
  fat: { type: String, trim: true, default: '0' },
  carb: { type: String, trim: true, default: '0' }
});

module.exports = Target = mongoose.model('target', TargetSchema);