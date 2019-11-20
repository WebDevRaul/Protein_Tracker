const Validator = require('validator');
const isEmpty = require('./is_Empty');

module.exports = function validateDashboardSet({ cal, prot, fat, carb }) {
  let errors = {};

  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';

  // Validate cal
  if ((!Validator.isFloat(cal, {min:0, max: 10001})) && (!Validator.isInt(cal))) {
    errors.cal = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(cal, {min:0, max:10000})&&(Validator.isInt(cal, {min:-Infinity, max:0}))) {
    errors.cal = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(cal, {min:0, max:10000})&&(!Validator.isInt(cal, {min:0, max: 10000}))) {
    errors.cal = 'Maximum Qty. is 10000'
  }

  // Validate prot
  if ((!Validator.isFloat(prot, {min:0, max: 1001})) && (!Validator.isInt(prot))) {
    errors.prot = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(prot, {min:0, max:10000})&&(Validator.isInt(prot, {min:-Infinity, max:0}))) {
    errors.prot = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(prot, {min:0, max:10000})&&(!Validator.isInt(prot, {min:0, max: 10000}))) {
    errors.prot = 'Maximum Qty. is 10000'
  }

  // Validate fat
  if ((!Validator.isFloat(fat, {min:0, max: 1001})) && (!Validator.isInt(fat))) {
    errors.fat = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(fat, {min:0, max:10000})&&(Validator.isInt(fat, {min:-Infinity, max:0}))) {
    errors.fat = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(fat, {min:0, max:10000})&&(!Validator.isInt(fat, {min:0, max: 10000}))) {
    errors.fat = 'Maximum Qty. is 10000'
  }

  // Validate carb
  if ((!Validator.isFloat(carb, {min:0, max: 1001})) && (!Validator.isInt(carb))) {
    errors.carb = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(carb, {min:0, max:10000})&&(Validator.isInt(carb, {min:-Infinity, max:0}))) {
    errors.carb = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(carb, {min:0, max:10000})&&(!Validator.isInt(carb, {min:0, max: 10000}))) {
    errors.carb = 'Maximum Qty. is 10000'
  }

  // Validate Empty
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