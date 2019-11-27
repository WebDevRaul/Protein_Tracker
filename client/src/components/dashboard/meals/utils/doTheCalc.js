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
    cal = (_cal * val) / 100;
    prot = (_prot * val) / 100;
    fat = (_fat * val) / 100;
    carb = (_carb * val) / 100;
  }

  cal = cal.toFixed(1).toString();
  prot = prot.toFixed(1).toString();
  fat = fat.toFixed(1).toString();
  carb = carb.toFixed(1).toString();

  // Check if EndsWith 0
  cal = cal.endsWith('0') ? cal.slice(0, -2) : cal;
  prot = prot.endsWith('0') ? prot.slice(0, -2) : prot;
  fat = fat.endsWith('0') ? fat.slice(0, -2) : fat;
  carb = carb.endsWith('0') ? carb.slice(0, -2) : carb;


  return { cal, prot, fat, carb };
}

export default doTheCalc;