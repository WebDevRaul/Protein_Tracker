import { COLLECT_SUM } from '../actions/types';

const initialState = {
  breakfastTotal: '',
  dinerTotal: '',
  lunchTotal: '',
  snack: ''
};

export default function(state=initialState, action) {
  switch(action) {
    case COLLECT_SUM:
      return {
        breakfastTotal: action.payload
      }
    default:
      return state;
  }
}