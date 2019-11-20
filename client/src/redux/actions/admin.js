import axios from 'axios';
import URL from './utils/URL';
import { ADMIN } from './types';
import { toastr } from 'react-redux-toastr';

export const saveItem = obj => dispatch => {
  dispatch({ type: ADMIN.LOADING });
  axios.post(`${URL.admin}/save-item`, obj)
    .then(({ data }) => {
      dispatch({ type: ADMIN.SAVE_ITEM });
      dispatch({ type: ADMIN.LOADED });
      toastr.success('Success!', 'Item saved');
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: ADMIN.LOADED });
    })
}

export const deleteItem = obj => dispatch => {
  axios.post(`${URL.admin}/delete-item`, obj)
    .then(({ data }) => {
      dispatch({ type: ADMIN.DELETE_ITEM });
      toastr.success('Success!', 'Item deleted');
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
    })
}

export const clearAdminErrors = () => {
  return { type: ADMIN.CLEAR_ERRORS }
}