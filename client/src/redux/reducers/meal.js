import { USER, MEAL, BREAKFAST, LUNCH,DINNER, SNACK } from '../actions/types';

const INITIAL_STATE = {
  breakfast: [],
  lunch: [],
  dinner: [],
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
        dinner: payload.filter(i => i.title === 'dinner')[0].items,
        snack: payload.filter(i => i.title === 'snack')[0].items,
        isDefault: false 
      };
    case MEAL.CLEAR_ALL:
      return { ...state, breakfast: [], lunch: [], dinner: [], snack: [] }
    case BREAKFAST.ITEM_UPDATE_REDUX:
      return { ...state, breakfast: [ ...state.breakfast, payload ]};
    case BREAKFAST.ITEM_UPDATE:
      return { ...state, breakfast: payload};
    case BREAKFAST.UPDATE_ITEM_REDUX:
      return { ...state, breakfast: [ ...state.breakfast.filter(i => i._id !== payload._id), payload.temp ] }
    case BREAKFAST.UPDATE_ITEM:
      return { ...state, breakfast: [...state.breakfast.filter(i => i._id !== `temp${payload._id}`), payload] }
    case BREAKFAST.DELETE_ITEM:
      return { ...state, breakfast: [...state.breakfast.filter(i => i._id !== payload)] }


    case LUNCH.ITEM_UPDATE_REDUX:
      return { ...state, lunch: [ ...state.lunch, payload ]};
    case LUNCH.ITEM_UPDATE:
      return { ...state, lunch: payload};
    case LUNCH.UPDATE_ITEM_REDUX:
      return { ...state, lunch: [ ...state.lunch.filter(i => i._id !== payload._id), payload.temp ] }
    case LUNCH.UPDATE_ITEM:
      return { ...state, lunch: [...state.lunch.filter(i => i._id !== `temp${payload._id}`), payload] }
    case LUNCH.DELETE_ITEM:
      return { ...state, lunch: [...state.lunch.filter(i => i._id !== payload)] }


    case DINNER.ITEM_UPDATE_REDUX:
      return { ...state, dinner: [ ...state.dinner, payload ]};
    case DINNER.ITEM_UPDATE:
      return { ...state, dinner: payload};
    case DINNER.UPDATE_ITEM_REDUX:
        return { ...state, dinner: [ ...state.dinner.filter(i => i._id !== payload._id), payload.temp ] }
    case DINNER.UPDATE_ITEM:
      return { ...state, dinner: [...state.dinner.filter(i => i._id !== `temp${payload._id}`), payload] }
    case DINNER.DELETE_ITEM:
        return { ...state, dinner: [...state.dinner.filter(i => i._id !== payload)] }


    case SNACK.ITEM_UPDATE_REDUX:
      return { ...state, snack: [ ...state.snack, payload ]};
    case SNACK.ITEM_UPDATE:
      return { ...state, snack: payload};
    case SNACK.UPDATE_ITEM_REDUX:
      return { ...state, snack: [ ...state.snack.filter(i => i._id !== payload._id), payload.temp ] }
    case SNACK.UPDATE_ITEM:
      return { ...state, snack: [...state.snack.filter(i => i._id !== `temp${payload._id}`), payload] }
    case SNACK.DELETE_ITEM:
        return { ...state, snack: [...state.snack.filter(i => i._id !== payload)] }

        
    case USER.SIGN_OUT:
        return { ...state, breakfast: [], lunch: [], dinner: [], snack: [], isDefault: true };
    default:
      return state;
  }
};

export default meal;