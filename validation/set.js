const Validator = require('validator');
const isEmpty = require('./is_Empty');

module.exports = function validateSetInput(data) {
  let errors = {};

  data.calories = !isEmpty(data.calories) ? data.calories : '';
  data.protein = !isEmpty(data.protein) ? data.protein : '';
  data.fat = !isEmpty(data.fat) ? data.fat : '';
  data.carbohydrates = !isEmpty(data.carbohydrates) ? data.carbohydrates : '';

  // Validate Numbers
  if (!Validator.isNumeric(data.calories)) {
    errors.setCalories = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(data.protein)) {
    errors.setProtein = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(data.fat)) {
    errors.setFat = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(data.carbohydrates)) {
    errors.setCarbohydrates = 'Only numbers allowed'
  }


  // Validate allow_leading_zeroes: false
  if (!Validator.isInt(data.calories, { allow_leading_zeroes: false })) {
    errors.setCalories = 'Only valid numbers allowed'
  }
  if (!Validator.isInt(data.protein, { allow_leading_zeroes: false })) {
    errors.setProtein = 'Only valid numbers allowed'
  }
  if (!Validator.isInt(data.fat, { allow_leading_zeroes: false })) {
    errors.setFat = 'Only valid numbers allowed'
  }
  if (!Validator.isInt(data.carbohydrates, { allow_leading_zeroes: false })) {
    errors.setCarbohydrates = 'Only valid numbers allowed'
  }

  // Validate True Numbers
  if (Validator.isInt(data.calories, {min:-Infinity, max:0})) {
    errors.setCalories = 'Minimum calories must be 1';
  }
  if (Validator.isInt(data.protein, {min:-Infinity, max:0})) {
    errors.setProtein = 'Minimum protein must be 1';
  }
  if (Validator.isInt(data.fat, {min:-Infinity, max:0})) {
    errors.setFat = 'Minimum fat must be 1';
  }
  if (Validator.isInt(data.carbohydrates, {min:-Infinity, max:0})) {
    errors.setCarbohydrates = 'Minimum carbohydrates must be 1';
  }

  // Validate Length
  if (!Validator.isLength(data.calories, {min:1, max: 5})) {
    errors.setCalories = 'Too many calories';
  }
  if (!Validator.isLength(data.protein, {min:1, max: 5})) {
    errors.setProtein = 'Too many protein';
  }
  if (!Validator.isLength(data.fat, {min:1, max: 5})) {
    errors.setFat = 'Too many fat';
  }
  if (!Validator.isLength(data.carbohydrates, {min:1, max: 5})) {
    errors.setCarbohydrates = 'Too many carbohydrates';
  }

  // Validate Empty
  if (Validator.isEmpty(data.calories)) {
    errors.setCalories = 'Calories field is required'
  }
  if (Validator.isEmpty(data.protein)) {
    errors.setProtein = 'Protein field is required'
  }
  if (Validator.isEmpty(data.fat)) {
    errors.setFat = 'Fat field is required'
  }
  if (Validator.isEmpty(data.carbohydrates)) {
    errors.setCarbohydrates = 'Carbohydrates field is required'
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
}