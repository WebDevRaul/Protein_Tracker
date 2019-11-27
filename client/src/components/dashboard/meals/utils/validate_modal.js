import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';
import { isIntAndMax } from '../../../common/utils/isInteger';
import { isFloatAndMax } from '../../../common/utils/isFloat';
import { isValidNumber, isIntAndNoLeadingZero } from '../../../common/utils/isNumber';

const validateModal = ({ qty, cal, prot, fat, carb }) => {
  let errors = {};

  qty = !isEmpty(qty) ? qty : '';

  if(isIntAndMax(cal)) errors.qty = 'Maximum Cal. is 1000';
  if(isIntAndMax(prot)) errors.qty = 'Maximum Prot. is 1000';
  if(isIntAndMax(fat)) errors.qty = 'Maximum Fat. is 1000';
  if(isIntAndMax(carb)) errors.qty = 'Maximum Card. is 1000';

  if(isFloatAndMax(cal)) errors.qty = 'Maximum Cal. is 1000';
  if(isFloatAndMax(prot)) errors.qty = 'Maximum Prot. is 1000';
  if(isFloatAndMax(fat)) errors.qty = 'Maximum Fat. is 1000';
  if(isFloatAndMax(carb)) errors.qty = 'Maximum Carb. is 1000';
  
  if(isIntAndMax(qty)) errors.qty = 'Maximum Qty. is 1000';
  if(Validator.isInt(qty) && Validator.isInt(qty, { min: -Infinity, max: 0 })) errors.qty = 'Minimum Qty. is 0.1';
  if(isFloatAndMax(cal)) errors.cal = 'Maximum Qty. is 1000';
  if(isIntAndNoLeadingZero(qty)) errors.qty = 'Enter a valid number';
  if(isValidNumber(qty)) errors.qty = 'Enter a valid number';
  if(!Validator.isNumeric(qty)) errors.qty = 'No characters allowed';
  if(Validator.isEmpty(qty)) errors.qty = 'Qty field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateModal;