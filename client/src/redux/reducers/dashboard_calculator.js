import { 
  COLLECT_BREAKFAST, 
  COLLECT_LUNCH, 
  COLLECT_DINER, 
  COLLECT_SNACK, 
  GET_CLEAR_TABLE, 
  CLEAR_LOCAL_BREAKFAST, 
  CLEAR_LOCAL_DINER, 
  CLEAR_LOCAL_LUNCH, 
  CLEAR_LOCAL_SNACK, 
  COLLECT_TARGET,
  COLLECT_ACTUAL,
  COLLECT_DIFFRENCE,
} from '../actions/types';

const initialState = {
  breakfast: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  lunch: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  diner: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  snack: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  target: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  actual: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  },
  diffrence: {
    calories: '0',
    protein: '0',
    fat: '0',
    carbohydrates: '0'
  }
};

export default function(state=initialState, action) {
  switch(action.type) {
    case COLLECT_BREAKFAST:
      return {
        ...state,
        breakfast: {
          calories: action.payload[0].calories,
          protein: action.payload[1].protein,
          fat: action.payload[2].fat,
          carbohydrates: action.payload[3].carbohydrates
        }
      }
    case COLLECT_LUNCH:
      return {
        ...state,
        lunch: {
          calories: action.payload[0].calories,
          protein: action.payload[1].protein,
          fat: action.payload[2].fat,
          carbohydrates: action.payload[3].carbohydrates
        }
      }
    case COLLECT_DINER:
      return {
        ...state,
        diner: {
          calories: action.payload[0].calories,
          protein: action.payload[1].protein,
          fat: action.payload[2].fat,
          carbohydrates: action.payload[3].carbohydrates
        }
      }
    case COLLECT_SNACK:
      return {
        ...state,
        snack: {
          calories: action.payload[0].calories,
          protein: action.payload[1].protein,
          fat: action.payload[2].fat,
          carbohydrates: action.payload[3].carbohydrates
        }
      }
    case GET_CLEAR_TABLE:
      return {
        ...state,
        breakfast: {},
        lunch: {},
        diner: {},
        snack: {}
      }
    case CLEAR_LOCAL_BREAKFAST:
      return {
        ...state,
        breakfast: {
          calories: '0',
          protein: '0',
          fat: '0',
          carbohydrates: '0'
        }
      }
    case CLEAR_LOCAL_LUNCH:
      return {
        ...state,
        lunch: {
          calories: '0',
          protein: '0',
          fat: '0',
          carbohydrates: '0'
        }
      }
    case CLEAR_LOCAL_DINER:
      return {
        ...state,
        diner: {
          calories: '0',
          protein: '0',
          fat: '0',
          carbohydrates: '0'
        }
      }
    case CLEAR_LOCAL_SNACK:
      return {
        ...state,
        snack: {
          calories: '0',
          protein: '0',
          fat: '0',
          carbohydrates: '0'
        }
      }
    case COLLECT_TARGET:
      return {
        ...state,
        target: {
          calories: action.payload.calories,
          protein: action.payload.protein,
          fat: action.payload.fat,
          carbohydrates: action.payload.carbohydrates
        }
      }
    case COLLECT_ACTUAL:
      return {
        ...state,
        actual: {
          calories: action.payload.calories,
          protein: action.payload.protein,
          fat: action.payload.fat,
          carbohydrates: action.payload.carbohydrates
        }
      }
    case COLLECT_DIFFRENCE:
      return {
        ...state,
        diffrence: {
          calories: action.payload.calories,
          protein: action.payload.protein,
          fat: action.payload.fat,
          carbohydrates: action.payload.carbohydrates
        }
      }
    
    default:
      return state;
  }
};