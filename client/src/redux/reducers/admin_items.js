import { FIND_ITEMS, CLEAR_ITEMS, DELETE_ITEM, SAVE_ITEM } from '../actions/typess';

const initialState = {
  item: {},
  items: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case SAVE_ITEM:
      return {
        ...state,
        item: action.payload
      }
    case FIND_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_ITEM:
      return {
        items: state.items.filter(item => item._id !== action.payload)
      }
    case CLEAR_ITEMS:
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
};