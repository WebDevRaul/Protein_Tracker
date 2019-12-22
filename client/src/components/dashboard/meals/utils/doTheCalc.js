import isEmpty from "../../../common/utils/isEmpty";

const doTheCalc = ({ qty, type, _qty, _cal, _prot, _carb, _fat, input }) => {
  let cal, prot, fat, carb;
  const val = isEmpty(input) ? qty : input;
  
  if(type === 'pc.') {
    cal = _cal * val;
    prot = _prot * val;
    fat = _fat * val;
    carb = _carb * val;
  } else {
    const length = _qty.length === 1 ? 1 : _qty.length === 2 ? 2 : 3;

    cal = (_cal * val) / '100'.slice(0, length);
    prot = (_prot * val) / '100'.slice(0, length);
    fat = (_fat * val) / '100'.slice(0, length);
    carb = (_carb * val) / '100'.slice(0, length);
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