import Validator from 'validator';
import isEmpty from '../../../../common/utils/isEmpty';
import {isIntAndMaxT, isIntAndMin} from '../../../../common/utils/isInteger';
import {isValidNumber, isIntAndNoLeadingZero} from '../../../../common/utils/isNumber';

const validateSet = ({ cal, prot, fat, carb }) => {
  let errors = {};

  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';
  
  // Validate Cal
  if(!Validator.isInt(cal)) errors.cal = 'No decimals allowed';
  if(Validator.isInt(cal) && Validator.isInt(cal, { min: -Infinity, max: 0 })) errors.cal = 'Minimum Qty. is 1';
  if(isIntAndMaxT(cal)) errors.cal = 'Maximum Qty. is 10000';
  if(isIntAndNoLeadingZero(cal)) errors.cal = 'Enter a valid number';
  if(isValidNumber(cal)) errors.cal = 'Enter a valid number';

  // Validate Prot
  if(!Validator.isInt(prot)) errors.prot = 'No decimals allowed';
  if(Validator.isInt(prot) && Validator.isInt(prot, { min: -Infinity, max: 0 })) errors.prot = 'Minimum Qty. is 1';
  if(isIntAndMaxT(prot)) errors.prot = 'Maximum Qty. is 10000';
  if(isIntAndNoLeadingZero(prot)) errors.prot = 'Enter a valid number';
  if(isValidNumber(prot)) errors.prot = 'Enter a valid number';

  // Validate Fat
  if(!Validator.isInt(fat)) errors.prot = 'No decimals allowed';
  if(Validator.isInt(fat) && Validator.isInt(fat, { min: -Infinity, max: 0 })) errors.fat = 'Minimum Qty. is 1';
  if(isIntAndMaxT(fat)) errors.fat = 'Maximum Qty. is 10000';
  if(isIntAndNoLeadingZero(fat)) errors.fat = 'Enter a valid number';
  if(isValidNumber(fat)) errors.fat = 'Enter a valid number';

  // Validate Carb
  if(!Validator.isInt(carb)) errors.carb = 'No decimals allowed';
  if(Validator.isInt(carb) && Validator.isInt(carb, { min: -Infinity, max: 0 })) errors.carb = 'Minimum Qty. is 1';
  if(isIntAndMaxT(carb)) errors.carb = 'Maximum Qty. is 10000';
  if(isIntAndNoLeadingZero(carb)) errors.carb = 'Enter a valid number';
  if(isValidNumber(carb)) errors.carb = 'Enter a valid number';

  // Validate Numbers
  if(!Validator.isNumeric(cal)) errors.cal = 'No characters allowed';
  if(!Validator.isNumeric(prot)) errors.prot = 'No characters allowed';
  if(!Validator.isNumeric(fat)) errors.fat = 'No characters allowed';
  if(!Validator.isNumeric(carb)) errors.carb = 'No characters allowed';

  // Validate Empty
  if(Validator.isEmpty(cal)) errors.cal = 'Calories field is required';
  if(Validator.isEmpty(prot)) errors.prot = 'Protein field is required';
  if(Validator.isEmpty(fat)) errors.fat = 'Fat field is required';
  if(Validator.isEmpty(carb)) errors.carb = 'Carbohydrates field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateSet;