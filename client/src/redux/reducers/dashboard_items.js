import { ADD_PRODUCT, FIND_PRODUCTS } from '../actions/types';
import isEmpty from '../../components/common/isEmpty';

const initialState = {
  item: {},
  breakfast: [],
  lunch: [],
  diner: [],
  snack: []
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
        breakfast: action.payload.filter(filterByID('0')),
        lunch : action.payload.filter(filterByID('1')),
        diner: action.payload.filter(filterByID('diner')),
        snack: action.payload.filter(filterByID('snack')),
      }
    default:
      return state;
  }
};