const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateSetInput(data) {
  let errors = {};

  data.calories = !isEmpty(data.calories) ? data.calories : '';
  data.protein = !isEmpty(data.protein) ? data.protein : '';
  data.fat = !isEmpty(data.fat) ? data.fat : '';
  data.carbohydrates = !isEmpty(data.carbohydrates) ? data.carbohydrates : '';

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


  return {
    errors,
    isValid: isEmpty(errors)
  };
}