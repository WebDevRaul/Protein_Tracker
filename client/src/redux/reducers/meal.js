import { USER, MEAL, BREAKFAST } from '../actions/types';

const INITIAL_STATE = {
  breakfast: [],
  lunch: [],
  diner: [],
  snack: [],
  isDefault: true
}

const meal = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case MEAL.UPDATE:
      return { 
        ...state, 
        breakfast: payload.filter(i => i.title === 'breakfast')[0].items,
        lunch: payload.filter(i => i.title === 'lunch')[0].items,
        diner: payload.filter(i => i.title === 'diner')[0].items,
        snack: payload.filter(i => i.title === 'snack')[0].items,
        isDefault: false 
      }
    case BREAKFAST.ITEM_UPDATE_REDUX:
    case BREAKFAST.ITEM_UPDATE:
      return { ...state, breakfast: [ ...state.breakfast, payload ]};
    case USER.SIGN_OUT:
        return { ...state, breakfast: [], lunch: [], diner: [], snack: [], isDefault: true };
    default:
      return state;
  }
};

export default meal;