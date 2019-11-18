import axios from 'axios';
import URL from './utils/URL';
import { USER } from './types';
import jwt_decode from 'jwt-decode';
import { toastr } from 'react-redux-toastr';

export const register = ({ data, history }) => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.account}/register`, data)
    .then(() => {
      dispatch({ type: USER.REGISTER });
      dispatch({ type: USER.LOADED });
      toastr.success('Success!', 'Registered successfully');
      history.push('/sign-in');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: USER.LOADED });
    })
};

export const signIn = obj => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.account}/sign-in`, obj)
    .then(({ data: { token } }) => {
      // Save to LocalStorage
      localStorage.setItem('PTracker_token', token);
      // Set Auth Token
      setAuthToken(token);
      // Set User
      dispatch(setCurrentUser(token));
      dispatch({ type: USER.LOADED });
      toastr.success('Success!', 'Signed In successfully');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: USER.LOADED });
    })
}

export const signOut = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('PTracker_token');
  // Remove Auth Token
  setAuthToken(false);
  // Clear user (Redux)
  dispatch(setRemoveUser());
  toastr.success('Success!', 'Signed Out successfully');
};

export const setAuthToken = token => {
  if (!token) return delete axios.defaults.headers.common['Authorization'];
  axios.defaults.headers.common['Authorization'] = token;
};

export const setCurrentUser = token => {
  return { type: USER.SIGN_IN, payload: jwt_decode(token) };
};

export const setRemoveUser = () => {
  return { type: USER.SIGN_OUT }
};

export const clearUserErrors = () => {
  return { type: USER.CLEAR_ERRORS }
}