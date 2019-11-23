import axios from 'axios';

export const UPDATE_ITEM = ({
  ENDPOINT,
  DATA,
  TEMP,
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
      dispatch({ type: REDUX, payload: TEMP });
      const response = await axios.post(`${ENDPOINT}`, DATA);
      const { data: { items } }  = response;
      return onSuccess(items);
    } catch (error) {
      return onError(error);
    }
  }
}