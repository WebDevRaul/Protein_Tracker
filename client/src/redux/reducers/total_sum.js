import { COLLECT_SUM } from '../actions/types';

const initialState = {
  breakfast: {
    calories: {},
    proteins: {},
    fat: {},
    carbohidrates: {}
  },
  diner: {
    calories: {},
    proteins: {},
    fat: {},
    carbohidrates: {}
  },
  lunch: {
    calories: {},
    proteins: {},
    fat: {},
    carbohidrates: {}
  },
  snack: {
    calories: {},
    proteins: {},
    fat: {},
    carbohidrates: {}
  }
};

export default function(state=initialState, action) {
  switch(action) {
    case COLLECT_SUM:
      return {
        breakfast: {
          ...state,
          calories: '1'
        }
      }
    default:
      return state;
  }
}