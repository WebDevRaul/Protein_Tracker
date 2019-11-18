const Validator = require('validator');
const isEmpty = require('./is_Empty');

module.exports = function validateAdminForm({ name, qty, type, cal, prot, fat, carb }) {
  let errors = {};

  name = !isEmpty(name) ? name : '';
  qty = !isEmpty(qty) ? qty : '';
  type = !isEmpty(type) ? type : '';
  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';


  // Validate Numbers
  if (!Validator.isNumeric(qty)) {
    errors.qty = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(cal)) {
    errors.cal = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(prot)) {
    errors.prot = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(fat)) {
    errors.fat = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(carb)) {
    errors.carb = 'Only numbers allowed'
  }


  // Validate name
  if (!Validator.isLength(name, { min:1, max: 50 })) {
    errors.name = 'Product Name must be between 1 and 50 characters';
  }

  // Validate cal
  if ((!Validator.isFloat(cal, {min:0, max: 1001})) && (!Validator.isInt(cal))) {
    errors.cal = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(cal, {min:0, max:1000})&&(Validator.isInt(cal, {min:-Infinity, max:0}))) {
    errors.cal = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(cal, {min:0, max:1000})&&(!Validator.isInt(cal, {min:0, max: 1000}))) {
    errors.cal = 'Maximum Qty. is 1000'
  }

  // Validate prot
  if ((!Validator.isFloat(prot, {min:0, max: 1001})) && (!Validator.isInt(prot))) {
    errors.prot = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(prot, {min:0, max:1000})&&(Validator.isInt(prot, {min:-Infinity, max:0}))) {
    errors.prot = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(prot, {min:0, max:1000})&&(!Validator.isInt(prot, {min:0, max: 1000}))) {
    errors.prot = 'Maximum Qty. is 1000'
  }

  // Validate fat
  if ((!Validator.isFloat(fat, {min:0, max: 1001})) && (!Validator.isInt(fat))) {
    errors.fat = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(fat, {min:0, max:1000})&&(Validator.isInt(fat, {min:-Infinity, max:0}))) {
    errors.fat = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(fat, {min:0, max:1000})&&(!Validator.isInt(fat, {min:0, max: 1000}))) {
    errors.fat = 'Maximum Qty. is 1000'
  }

  // Validate carb
  if ((!Validator.isFloat(carb, {min:0, max: 1001})) && (!Validator.isInt(carb))) {
    errors.carb = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(carb, {min:0, max:1000})&&(Validator.isInt(carb, {min:-Infinity, max:0}))) {
    errors.carb = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(carb, {min:0, max:1000})&&(!Validator.isInt(carb, {min:0, max: 1000}))) {
    errors.carb = 'Maximum Qty. is 1000'
  }



  // Validate allow_leading_zeroes: false
  if (!Validator.isInt(qty, {allow_leading_zeroes: false})) {
    errors.qty = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(cal, {allow_leading_zeroes: false})) {
    errors.cal = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(prot, {allow_leading_zeroes: false})) {
    errors.prot = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(fat, {allow_leading_zeroes: false})) {
    errors.fat = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(carb, {allow_leading_zeroes: false})) {
    errors.carb = 'Only valid numbers allowed';
  }


  // Validate Empty
  if (Validator.isEmpty(name)) {
    errors.name = 'Product Name field is required'
  }
  if (Validator.isEmpty(qty)) {
    errors.qty = 'Quantity field is required'
  }
  if (Validator.isEmpty(type)) {
    errors.type = 'Type field is required'
  }
  if (Validator.isEmpty(cal)) {
    errors.cal = 'Calories field is required'
  }
  if (Validator.isEmpty(prot)) {
    errors.prot = 'Protein field is required'
  }
  if (Validator.isEmpty(fat)) {
    errors.fat = 'Fat field is required'
  }
  if (Validator.isEmpty(carb)) {
    errors.carb = 'Carbohydrates field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};