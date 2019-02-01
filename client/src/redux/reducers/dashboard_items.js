import { ADD_PRODUCT, FIND_PRODUCTS } from '../actions/types';

const initialState = {
  item: {},
  breakfast: [],
  diner: [],
  snack: [],
  lunch: []
};

export default function(state=initialState, action) {

  // Filter by table_id
  const filterByID = data => item => {
    if (item.table_id === data) {
      return true
    };
  }
  

  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        item: action.payload
      }
    case FIND_PRODUCTS:
      return {
        ...state,
        breakfast: action.payload.filter(filterByID('breakfast')),
        diner: action.payload.filter(filterByID('diner')),
        snack: action.payload.filter(filterByID('snack')),
        lunch: action.payload.filter(filterByID('lunch')),
      }
    default:
      return state;
  }
};