import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import get_Errors from './get_Errors';
import login_user from './login_user';
import dashboard_items from './dashboard_items';
import admin_items from './admin_items';
import dashboard_calculator from './dashboard_calculator';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};


const rootReducer =  combineReducers({
  errors: get_Errors,
  auth: login_user,
  admin: admin_items,
  dashboard: dashboard_items,
  calculator: dashboard_calculator,
  toastr: ToastrReducer
});

export default persistReducer(persistConfig, rootReducer);