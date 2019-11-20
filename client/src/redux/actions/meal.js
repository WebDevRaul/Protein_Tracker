import axios from 'axios';
import URL from './utils/URL';
import { MEAL } from './types';
import { toastr } from 'react-redux-toastr';

export const updateItem = obj => dispatch => {
  dispatch({ type: MEAL.LOADING });
  axios.post(`${URL.meal}/update-item`, obj)
    .then(({ data }) => {
      dispatch({ type: MEAL.UPDATE_ITEM });
      dispatch({ type: MEAL.LOADED });
      toastr.success('Success!', 'Item saved');
    })
    .catch(err => {
      dispatch({ type: MEAL.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: MEAL.LOADED });
    })
}

export const deleteItem = obj => dispatch => {
  axios.post(`${URL.meal}/delete-item`, obj)
    .then(({ data }) => {
      dispatch({ type: MEAL.DELETE_ITEM });
      toastr.success('Success!', 'Item deleted');
    })
    .catch(err => {
      dispatch({ type: MEAL.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
    })
}

export const clearMealErrors = () => {
  return { type: MEAL.CLEAR_ERRORS }
}