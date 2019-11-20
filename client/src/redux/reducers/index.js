import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import user from './user';
import target from './target';
import admin from './admin';
import loading from './loading';
import error from './error';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'protein-tracker']
};


const rootReducer =  combineReducers({
  user,
  target,
  admin,
  loading,
  error,
  toastr: ToastrReducer
});

export default persistReducer(persistConfig, rootReducer);