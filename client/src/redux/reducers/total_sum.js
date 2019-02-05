import { COLLECT_BREAKFAST, COLLECT_LUNCH } from '../actions/types';

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
    default:
      return state;
  }
};