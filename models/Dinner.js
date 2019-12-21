const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinnerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  title: { type: String, required: true, trim: true, maxlength: 10, },
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
      },
      p: {
        type: Number,
        required: true,
        trim: true
      },
      _cal: {
        type: String,
        required: true,
        trim: true
      },
      _prot: {
        type: String,
        required: true,
        trim: true
      },
      _fat: {
        type: String,
        required: true,
        trim: true
      },
      _carb: {
        type: String,
        required: true,
        trim: true
      }
    }
  ]
});

module.exports = Dinner = mongoose.model('dinner', DinnerSchema);