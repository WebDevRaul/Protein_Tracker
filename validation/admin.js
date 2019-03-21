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



  // Validate product_name
  if (!Validator.isLength(data.product_name, {min: 1, max: 20})) {
    errors.product_name = 'Product name is to long'
  }


  // Validate quantity
  if (Validator.isAlpha(data.quantity)) {
    errors.quantity = 'Quantity requires only numbers'
  }
  if (!Validator.isAlphanumeric(data.quantity)) {
    errors.quantity = 'Quantity requires only numbers'
  }
  if (Validator.isInt(data.quantity, {min: -Infinity, max:0})) {
    errors.quantity = 'Minimum quantity required 1'
  }
  if (Validator.isInt(data.quantity, {min:1001, max: Infinity})) {
    errors.quantity = 'Miximum quantity required 1000';
  }

  // Validate calories
  if (Validator.isAlpha(data.calories)) {
    errors.calories = 'Calories requires only numbers'
  }
  if (!Validator.isAlphanumeric(data.calories)) {
    errors.calories = 'Calories requires only numbers'
  }
  if (Validator.isInt(data.calories, {min: -Infinity, max:0})) {
    errors.calories = 'Minimum calories required 1'
  }
  if (Validator.isInt(data.calories, {min:1001, max: Infinity})) {
    errors.calories = 'Miximum calories required 1000';
  }

  // Validate proteins
  if (Validator.isAlpha(data.protein)) {
    errors.protein = 'Protein requires only numbers'
  }
  if (!Validator.isAlphanumeric(data.protein)) {
    errors.protein = 'Protein requires only numbers'
  }
  if (Validator.isInt(data.protein, {min: -Infinity, max:0})) {
    errors.protein = 'Minimum protein required 1'
  }
  if (Validator.isInt(data.protein, {min:1001, max: Infinity})) {
    errors.protein = 'Miximum protein required 1000';
  }

  // Validate fat
  if (Validator.isAlpha(data.fat)) {
    errors.fat = 'Fat requires only numbers'
  }
  if (!Validator.isAlphanumeric(data.fat)) {
    errors.fat = 'Fat requires only numbers'
  }
  if (Validator.isInt(data.fat, {min: -Infinity, max:0})) {
    errors.fat = 'Minimum fat required 1'
  }
  if (Validator.isInt(data.fat, {min:1001, max: Infinity})) {
    errors.fat = 'Miximum fat required 1000';
  }

  // Validate carbohydrates
  if (Validator.isAlpha(data.carbohydrates)) {
    errors.carbohydrates = 'Carbohydrates requires only numbers'
  }
  if (!Validator.isAlphanumeric(data.carbohydrates)) {
    errors.carbohydrates = 'Carbohydrates requires only numbers'
  }
  if (Validator.isInt(data.carbohydrates, {min: -Infinity, max:0})) {
    errors.carbohydrates = 'Minimum carbohydrates required 1'
  }
  if (Validator.isInt(data.carbohydrates, {min:1001, max: Infinity})) {
    errors.carbohydrates = 'Miximum carbohydrates required 1000';
  }


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