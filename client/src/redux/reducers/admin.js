import { USER, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  items: [],
  isDefault: true
}

const target = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case ADMIN.UPDATE:
      return { ...state, items: payload, isDefault: false };
    case ADMIN.SAVE_ITEM_REDUX:
      return { ...state, items: [...state.items, payload] };
    case ADMIN.SAVE_ITEM:
      case ADMIN.DELETE_ITEM:
      return { ...state, items: payload}
    case USER.SIGN_OUT:
        return { ...state, items: [], isDefault: true };
    default:
      return state;
  }
};

export default target;