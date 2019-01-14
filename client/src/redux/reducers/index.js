import { combineReducers } from 'redux';
import get_Errors from './get_Errors';


export default combineReducers({
  errors: get_Errors,
});