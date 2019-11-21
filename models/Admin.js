const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: [
    {
      name: { 
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 50,
      },
      qty: {
        type: String,
        required: true,
        trim: true
      },
      type: {
        type: String,
        required: true,
        trim: true
      },
      cal: {
        type: String,
        required: true,
        trim: true
      },
      prot: {
        type: String,
        required: true,
        trim: true
      },
      fat: {
        type: String,
        required: true,
        trim: true
      },
      carb: {
        type: String,
        required: true,
        trim: true
      }
    }
  ]
});

module.exports = admin = mongoose.model('admin', AdminSchema);