const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateItemInput(data) {
  let errors = {};

  data.product_name = !isEmpty(data.product_name) ? data.product_name : '';
  data.quantity = !isEmpty(data.quantity) ? data.quantity : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.calories = !isEmpty(data.calories) ? data.calories : '';
  data.protein = !isEmpty(data.protein) ? data.protein : '';
  data.fat = !isEmpty(data.fat) ? data.fat : '';
  data.carbohydrates = !isEmpty(data.carbohydrates) ? data.carbohydrates : '';

  // Validate items for empty
  if (Validator.isEmpty(data.product_name)) {
    errors.product_name = 'Product name field is required'
  };
  if (Validator.isEmpty(data.quantity)) {
    errors.quantity = 'Quantity field is required'
  };
  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type field is required'
  };
  if (Validator.isEmpty(data.calories)) {
    errors.calories = 'Calories field is required'
  };
  if (Validator.isEmpty(data.protein)) {
    errors.protein = 'Protein field is required'
  };
  if (Validator.isEmpty(data.fat)) {
    errors.fat = 'Fat field is required'
  };
  if (Validator.isEmpty(data.carbohydrates)) {
    errors.carbohydrates = 'Carbohydrates field is required'
  };

  return {
    errors,
    isValid: isEmpty(errors)
  };
};