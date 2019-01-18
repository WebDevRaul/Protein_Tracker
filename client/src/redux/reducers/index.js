import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import login_user from './login_user';


export default combineReducers({
  errors: get_Errors,
  auth: login_user
});