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
    el.map(item => {
      if(isEmpty(item)) return;
      const { cal, prot, fat, carb } = item;
      _cal.push(cal);
      _prot.push(prot);
      _fat.push(fat);
      _carb.push(carb);
    })
  });

  // Sum the data
  actual.cal = sumAll(..._cal).toFixed(1).toString();
  actual.prot = sumAll(..._prot).toFixed(1).toString();
  actual.fat = sumAll(..._fat).toFixed(1).toString();
  actual.carb = sumAll(..._carb).toFixed(1).toString();


/////////////////////////////////////////////////////
////////////////////  DIFFRENCE  ////////////////////
/////////////////////////////////////////////////////

  diffrence.cal = ( target.cal - actual.cal ).toFixed(1).toString();
  diffrence.prot = ( target.prot - actual.prot ).toFixed(1).toString();
  diffrence.fat = ( target.fat - actual.fat ).toFixed(1).toString();
  diffrence.carb = ( target.carb - actual.carb ).toFixed(1).toString();
  
  return { actual, diffrence };
};

export default doTheCalc;