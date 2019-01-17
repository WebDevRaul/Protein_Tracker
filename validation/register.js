const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name: '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name: '';
  data.username = !isEmpty(data.username) ? data.username: '';
  data.email = !isEmpty(data.email) ? data.email: '';
  data.password = !isEmpty(data.password) ? data.password: '';
  data.password2 = !isEmpty(data.password2) ? data.password2: '';

  // Validate first_name & last_name & username
  if (!Validator.isLength(data.first_name, { min:2, max: 30 })) {
    errors.first_name = 'First Name must be between 2 and 30 characters';
  }
  if (!Validator.isLength(data.last_name, { min:2, max: 30 })) {
    errors.last_name = 'Last Name must be between 2 and 30 characters';
  }
  if (!Validator.isLength(data.username, { min:2, max: 30 })) {
    errors.username = 'Username must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'First Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}