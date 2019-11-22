import isEmpty from "../../../common/utils/isEmpty";

const doTheCalc = ({ qty, type, cal, prot, carb, fat, input, state_qty }) => {
  let _cal, _prot, _fat, _carb;
  const val = isEmpty(input) ? (state_qty!==qty) ? state_qty : qty : input;
  
  if(type === 'pc.') {
    _cal = cal * val;
    _prot = prot * val;
    _fat = fat * val;
    _carb = carb * val;
  } else {
    _cal = (val / qty) * cal;
    _prot = (val / qty) * prot;
    _fat = (val / qty) * fat;
    _carb = (val / qty) * carb;
  }

  _cal = _cal.toFixed(1).toString();
  _prot = _prot.toFixed(1).toString();
  _fat = _fat.toFixed(1).toString();
  _carb = _carb.toFixed(1).toString();


  return { _cal, _prot, _fat, _carb };
}

export default doTheCalc;