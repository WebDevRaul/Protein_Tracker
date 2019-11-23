import isEmpty from "../../../common/utils/isEmpty";

const doTheCalc = ({ qty, type, _cal, _prot, _carb, _fat, input, state_qty }) => {
  let cal, prot, fat, carb;
  const val = isEmpty(input) ? (state_qty!==qty) ? state_qty : qty : input;
  
  if(type === 'pc.') {
    cal = _cal * val;
    prot = _prot * val;
    fat = _fat * val;
    carb = _carb * val;
  } else {
    cal = (val / qty) * _cal;
    prot = (val / qty) * _prot;
    fat = (val / qty) * _fat;
    carb = (val / qty) * _carb;
  }

  cal = cal.toFixed(1).toString();
  prot = prot.toFixed(1).toString();
  fat = fat.toFixed(1).toString();
  carb = carb.toFixed(1).toString();


  return { cal, prot, fat, carb };
}

export default doTheCalc;