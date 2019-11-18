import axios from 'axios';
import URL from './utils/URL';
import { ADMIN } from './types';
import { toastr } from 'react-redux-toastr';
import { setAuthToken } from './user';

export const saveItem = obj => dispatch => {
  console.log(obj)
  dispatch({ type: ADMIN.LOADING_FORM });
  axios.post(`${URL.admin}/form`, obj)
    .then(({ data: { token, data } }) => {
      dispatch({ type: ADMIN.SAVE_ITEM, payload: { data } });
      // Remove old Token
      localStorage.removeItem('PTracker_token');
      // Set new Token
      localStorage.setItem('PTracker_token', token);
      // Set Auth Token
      setAuthToken(token);
      dispatch({ type: ADMIN.LOADED_FORM });
      toastr.success('Success!', 'Item saved');
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: ADMIN.LOADED_FORM });
    })
}