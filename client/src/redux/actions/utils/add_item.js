import axios from 'axios';
import { toastr } from 'react-redux-toastr';

export const ADD_ITEM = ({
  ENDPOINT,
  DATA,
  LOADING,
  REDUX,
  SUCCESS_TYPE,
  ERROR_TYPE,
  LOADED
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
      dispatch({ type: LOADED });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADED });
    };
    try {
      dispatch({ type: LOADING });
      dispatch({ type: REDUX, payload: DATA });
      const response = await axios.post(`${ENDPOINT}`, DATA);
      const { data: { items } }  = response;
      return onSuccess(items);
    } catch (error) {
      return onError(error);
    }
  }
}