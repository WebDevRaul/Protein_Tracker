import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import user from './user';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'protein-tracker']
};


const rootReducer =  combineReducers({
  user,
  toastr: ToastrReducer
});

export default persistReducer(persistConfig, rootReducer);