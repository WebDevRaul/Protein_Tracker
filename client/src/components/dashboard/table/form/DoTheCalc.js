const doTheCalc = ({ age, gender, activity, height, weight }) => {
  let cal, prot, fat, carb;

  if(gender === 'Man') {
    cal = (66.4730+(13.7516 * Number(weight)) + (5.0033 * Number(height)) - (6.7550 * Number(age))) * Number(activity);
    prot = weight*0.825;
    fat = (cal * 0.25)/9;
    carb = cal/4
  } else {
    cal=(655.0955 + (9.5634 * Number(weight)) + (1.8496 * Number(height))-(4.6756 * Number(age))) * Number(activity);
    prot = weight*0.825;
    fat = (cal * 0.25)/9;
    carb = cal/4;
  }

  // Round and toString
  cal = Math.ceil(cal).toString();
  prot = Math.ceil(prot).toString();
  fat = Math.ceil(fat).toString();
  carb = Math.ceil(carb).toString();

  return { cal, prot, fat, carb };
}

export default doTheCalc;