import axios from 'axios';
import URL from './utils/URL';
import { TARGET } from './types';
import { toastr } from 'react-redux-toastr';

export const update = () => dispatch => {
  dispatch({ type: TARGET.LOADING_UPDATE });
  axios.get(`${URL.target}/update`)
  .then(({ data }) => {
    dispatch({ type: TARGET.UPDATE, payload: data });
    dispatch({ type: TARGET.LOADED_UPDATE });
    })
    .catch(err => dispatch({ type: TARGET.ERROR, payload: err.response.data }))
}

export const set = obj => dispatch => {
  dispatch({ type: TARGET.LOADING_SET });
  dispatch({ type: TARGET.SET_REDUX, payload: obj })
  axios.post(`${URL.target}/set`, obj)
    .then(({ data }) => {
      dispatch({ type: TARGET.SET, payload: data });
      toastr.success('Success', '....');
      dispatch({ type: TARGET.LOADED_SET });
    })
    .catch(err => {
      dispatch({ type: TARGET.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: TARGET.LOADED_SET });
    })
}

export const calc = obj => dispatch => {
  dispatch({ type: TARGET.LOADING_CALC });
  dispatch({ type: TARGET.CALC_REDUX, payload: obj });
  axios.post(`${URL.target}/set`, obj)
    .then(({ data }) => {
      dispatch({ type: TARGET.CALC, payload: data });
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