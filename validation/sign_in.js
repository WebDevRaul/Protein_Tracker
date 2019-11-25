const Validator = require('validator');
const isEmpty = require('./utils/isEmpty');

module.exports = function validateSignIn({ email, password }) {
  let errors = {};

  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';

  // Validate email
  if (!Validator.isEmail(email)) errors.email = 'Email is invalid';
  
  // Validate password
  if (!Validator.isLength(password, {min:6})) errors.password = 'Password must be at least 6 characters';
  
  if (!Validator.isLength(password, {max:30})) errors.password = 'Password cant exceed 30 characters';


  // Validate Empty
  if (Validator.isEmpty(email)) errors.email = 'Email field is required!';

  if (Validator.isEmpty(password)) errors.password = 'Password field is required!';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};