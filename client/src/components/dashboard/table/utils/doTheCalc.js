import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';

const sumAll = (...args) => {
  let sum = 0;
  for (let arg of args) sum += Number(arg);
  return sum;
};

const doTheCalc = (target, breakfast, lunch, diner, snack) => {
  const actual = {};
  const diffrence = {};
  
  const _cal = [];
  const _prot = [];
  const _fat = [];
  const _carb = [];


//////////////////////////////////////////////////
////////////////////  ACTUAL  ////////////////////
//////////////////////////////////////////////////

  // Collect all data
  [breakfast, lunch, diner, snack].map(el => {
    return el.map(item => {
      if(isEmpty(item)) return item;
      const { cal, prot, fat, carb } = item;
      _cal.push(cal);
      _prot.push(prot);
      _fat.push(fat);
      _carb.push(carb);
      return item
    })
  });

  // Sum the data
  actual.cal = sumAll(..._cal).toFixed(1).toString();
  actual.prot = sumAll(..._prot).toFixed(1).toString();
  actual.fat = sumAll(..._fat).toFixed(1).toString();
  actual.carb = sumAll(..._carb).toFixed(1).toString();

  // Check if EndsWith 0
  actual.cal = actual.cal.endsWith('0') ? actual.cal.slice(0, -2) : actual.cal;
  actual.prot = actual.prot.endsWith('0') ? actual.prot.slice(0, -2) : actual.prot;
  actual.fat = actual.fat.endsWith('0') ? actual.fat.slice(0, -2) : actual.fat;
  actual.carb = actual.carb.endsWith('0') ? actual.carb.slice(0, -2) : actual.carb;
  


/////////////////////////////////////////////////////
////////////////////  DIFFRENCE  ////////////////////
/////////////////////////////////////////////////////

  diffrence.cal = ( target.cal - actual.cal ).toFixed(1).toString();
  diffrence.prot = ( target.prot - actual.prot ).toFixed(1).toString();
  diffrence.fat = ( target.fat - actual.fat ).toFixed(1).toString();
  diffrence.carb = ( target.carb - actual.carb ).toFixed(1).toString();

  // Check if EndsWith 0
  diffrence.cal = diffrence.cal.endsWith('0') ? diffrence.cal.slice(0, -2) : diffrence.cal;
  diffrence.prot = diffrence.prot.endsWith('0') ? diffrence.prot.slice(0, -2) : diffrence.prot;
  diffrence.fat = diffrence.fat.endsWith('0') ? diffrence.fat.slice(0, -2) : diffrence.fat;
  diffrence.carb = diffrence.carb.endsWith('0') ? diffrence.carb.slice(0, -2) : diffrence.carb;
  
  return { actual, diffrence };
};

export default doTheCalc;