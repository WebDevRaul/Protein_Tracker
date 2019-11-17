import axios from 'axios';
import URL from './utils/URL';
import { TABLE, USER } from './types';
import { toastr } from 'react-redux-toastr';
import { setAuthToken } from './user';

export const set = obj => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.table}/set`, obj)
    .then(({ data: { token, info, target, breakfast, lunch, diner, snack, isAuth } }) => {
      dispatch({ type: TABLE.SET, payload: { info, target, breakfast, lunch, diner, snack, isAuth } });
      // Remove old Token
      localStorage.removeItem('PTracker_token');
      // Set new Token
      localStorage.setItem('PTracker_token', token);
      // Set Auth Token
      setAuthToken(token);
      dispatch({ type: USER.LOADED });
      toastr.success('Success!', '....');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: USER.LOADED });
    })
}