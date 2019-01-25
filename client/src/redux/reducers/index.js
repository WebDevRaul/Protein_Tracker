import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import login_user from './login_user';
import saveItem from './save_Item';
import find_items from './find_items';


export default combineReducers({
  errors: get_Errors,
  auth: login_user,
  item: saveItem,
  items: find_items
});