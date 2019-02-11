import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import login_user from './login_user';
import dashboard_items from './dashboard_items';
import admin_items from './admin_items';
import dashboard_calculator from './dashboard_calculator';


export default combineReducers({
  errors: get_Errors,
  auth: login_user,
  admin: admin_items,
  dashboard: dashboard_items,
  calculator: dashboard_calculator
});