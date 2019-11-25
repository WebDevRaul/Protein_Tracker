import { USER, MEAL, BREAKFAST, LUNCH,DINER, SNACK } from '../actions/types';

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
      };
    case MEAL.CLEAR_ALL:
      return { ...state, breakfast: [], lunch: [], diner: [], snack: [] }
    case BREAKFAST.ITEM_UPDATE_REDUX:
      return { ...state, breakfast: [ ...state.breakfast, payload ]};
    case BREAKFAST.ITEM_UPDATE:
      return { ...state, breakfast: payload};
    case BREAKFAST.UPDATE_ITEM_REDUX:
      return { ...state, breakfast: [ ...state.breakfast.filter(i => i._id !== payload._id), payload.temp ] }
    case BREAKFAST.UPDATE_ITEM:
      return { ...state, breakfast: [...state.breakfast.filter(i => i._id !== 'temp'), payload] }
    case BREAKFAST.DELETE_ITEM:
      return { ...state, breakfast: [...state.breakfast.filter(i => i._id !== payload)] }


    case LUNCH.ITEM_UPDATE_REDUX:
      return { ...state, lunch: [ ...state.lunch, payload ]};
    case LUNCH.ITEM_UPDATE:
      return { ...state, lunch: payload};
    case LUNCH.UPDATE_ITEM_REDUX:
      return { ...state, lunch: [ ...state.lunch.filter(i => i._id !== payload._id), payload.temp ] }
    case LUNCH.UPDATE_ITEM:
      return { ...state, lunch: [...state.lunch.filter(i => i._id !== 'temp'), payload] }
    case LUNCH.DELETE_ITEM:
      return { ...state, lunch: [...state.lunch.filter(i => i._id !== payload)] }


    case DINER.ITEM_UPDATE_REDUX:
      return { ...state, diner: [ ...state.diner, payload ]};
    case DINER.ITEM_UPDATE:
      return { ...state, diner: payload};
    case DINER.UPDATE_ITEM_REDUX:
        return { ...state, diner: [ ...state.diner.filter(i => i._id !== payload._id), payload.temp ] }
    case DINER.UPDATE_ITEM:
      return { ...state, diner: [...state.diner.filter(i => i._id !== 'temp'), payload] }
    case DINER.DELETE_ITEM:
        return { ...state, diner: [...state.diner.filter(i => i._id !== payload)] }


    case SNACK.ITEM_UPDATE_REDUX:
      return { ...state, snack: [ ...state.snack, payload ]};
    case SNACK.ITEM_UPDATE:
      return { ...state, snack: payload};
    case SNACK.UPDATE_ITEM_REDUX:
      return { ...state, snack: [ ...state.snack.filter(i => i._id !== payload._id), payload.temp ] }
    case SNACK.UPDATE_ITEM:
      return { ...state, snack: [...state.snack.filter(i => i._id !== 'temp'), payload] }
    case SNACK.DELETE_ITEM:
        return { ...state, snack: [...state.snack.filter(i => i._id !== payload)] }

        
    case USER.SIGN_OUT:
        return { ...state, breakfast: [], lunch: [], diner: [], snack: [], isDefault: true };
    default:
      return state;
  }
};

export default meal;