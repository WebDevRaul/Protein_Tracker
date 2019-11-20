import axios from 'axios';
import URL from './utils/URL';
import { TARGET } from './types';
import { toastr } from 'react-redux-toastr';

export const set = obj => dispatch => {
  dispatch({ type: TARGET.LOADING_SET });
  axios.post(`${URL.target}/set`, obj)
    .then(({ data  }) => {
      dispatch({ type: TARGET.SET });
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
    .then(({ data }) => {
      dispatch({ type: TARGET.SET});
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