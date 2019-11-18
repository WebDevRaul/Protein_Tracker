import axios from 'axios';
import URL from './utils/URL';
import { TARGET } from './types';
import { toastr } from 'react-redux-toastr';
import { setAuthToken } from './user';

export const set = obj => dispatch => {
  dispatch({ type: TARGET.LOADING_SET });
  axios.post(`${URL.target}/set`, obj)
    .then(({ data: { token, info, target, breakfast, lunch, diner, snack, isAuth } }) => {
      dispatch({ type: TARGET.SET, payload: { info, target, breakfast, lunch, diner, snack, isAuth } });
      // Remove old Token
      localStorage.removeItem('PTracker_token');
      // Set new Token
      localStorage.setItem('PTracker_token', token);
      // Set Auth Token
      setAuthToken(token);
      dispatch({ type: TARGET.LOADED_SET });
      toastr.success('Success!', '....');
    })
    .catch(err => {
      dispatch({ type: TARGET.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: TARGET.LOADED_SET });
    })
}

export const calc = obj => dispatch => {
  dispatch({ type: TARGET.LOADING_CALC });
  axios.post(`${URL.target}/calc`, obj)
    .then(({ data: { token, info, target, breakfast, lunch, diner, snack, isAuth } }) => {
      dispatch({ type: TARGET.LOADING_CALC, payload: { info, target, breakfast, lunch, diner, snack, isAuth } });
      // Remove old Token
      localStorage.removeItem('PTracker_token');
      // Set new Token
      localStorage.setItem('PTracker_token', token);
      // Set Auth Token
      setAuthToken(token);
      dispatch({ type: TARGET.LOADED_CALC });
      toastr.success('Success!', '....');
    })
    .catch(err => {
      dispatch({ type: TARGET.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: TARGET.LOADED_CALC });
    })
}

export const clearTargetErrors = () => {
  return { type: TARGET.CLEAR_ERRORS }
}