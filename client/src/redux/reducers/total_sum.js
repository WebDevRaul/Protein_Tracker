import { COLLECT_BREAKFAST, COLLECT_LUNCH, COLLECT_DINER, COLLECT_SNACK, GET_CLEAR_TABLE, CLEAR_LOCAL_BREAKFAST, CLEAR_LOCAL_DINER, CLEAR_LOCAL_LUNCH, CLEAR_LOCAL_SNACK, DAILY_TARGET } from '../actions/types';

const initialState = {
  breakfast: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: ''
  },
  lunch: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: ''
  },
  diner: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: ''
  },
  snack: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: ''
  },
  dailyTarget: {
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: ''
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
        breakfast: {}
      }
    case CLEAR_LOCAL_LUNCH:
      return {
        ...state,
        lunch: {}
      }
    case CLEAR_LOCAL_DINER:
      return {
        ...state,
        diner: {}
      }
    case CLEAR_LOCAL_SNACK:
      return {
        ...state,
        snack: {}
      }
    case DAILY_TARGET:
      return {
        ...state,
        dailyTarget: {
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