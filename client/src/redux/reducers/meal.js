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
        breakfast: payload.bearkfast,
        lunch: payload.lunch,
        diner: payload.diner,
        snack: payload.snack,
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