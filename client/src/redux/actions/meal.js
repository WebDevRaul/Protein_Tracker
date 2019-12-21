import axios from 'axios';
import { MEAL, BREAKFAST, LUNCH, DINNER, SNACK } from './types';
import { ADD_ITEM } from './utils/add_item';
import { UPDATE_ITEM } from './utils/update_item';
import { DELETE_ITEM } from './utils/delete_item';
import URL from './utils/URL';

export const updateMeal = () => dispatch => {
  dispatch({ type: MEAL.LOADING });
  axios.get(`${URL.meal}/update`)
    .then(({ data }) => {
      dispatch({ type: MEAL.UPDATE, payload: data });
      dispatch({ type: MEAL.LOADED });
    })
    .catch(err => {
      dispatch({ type: MEAL.ERROR, payload: err.response.data })
      dispatch({ type: MEAL.LOADED });
    })
}

export const clearAll = () => dispatch => {
  dispatch({ type: MEAL.LOADING });
  axios.get(`${URL.meal}/clear-all`)
    .then(() => {
      dispatch({ type: MEAL.CLEAR_ALL });
      dispatch({ type: MEAL.LOADED });
    })
    .catch(err => {
      dispatch({ type: MEAL.ERROR, payload: err.response.data })
      dispatch({ type: MEAL.LOADED });
    })
}


////////////////////////////////////////////////////
////////////////////  ADD ITEM  ////////////////////
////////////////////////////////////////////////////


export const addItemToTable = ({ data, temp, title }) => {
  if(title === 'Breakfast') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      TEMP: temp,
      LOADING: BREAKFAST.LOADING,
      REDUX: BREAKFAST.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: BREAKFAST.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: BREAKFAST.LOADED
    })
  }
  if(title === 'Lunch') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      TEMP: temp,
      LOADING: LUNCH.LOADING,
      REDUX: LUNCH.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: LUNCH.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'Dinner') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      TEMP: temp,
      LOADING: DINNER.LOADING,
      REDUX: DINNER.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: DINNER.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINNER.LOADED
    })
  }
  if(title === 'Snack') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      TEMP: temp,
      LOADING: SNACK.LOADING,
      REDUX: SNACK.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: SNACK.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: SNACK.LOADED
    })
  }
}


///////////////////////////////////////////////////////
////////////////////  UPDATE ITEM  ////////////////////
///////////////////////////////////////////////////////


export const updateItemsToTable = ({ data, title, temp, _id, item }) => {
  if(title === 'Breakfast') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
      ITEM: item,
      LOADING: BREAKFAST.LOADING,
      REDUX: BREAKFAST.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: BREAKFAST.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: BREAKFAST.LOADED
    })
  }
  if(title === 'Lunch') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
      ITEM: item,
      LOADING: LUNCH.LOADING,
      REDUX: LUNCH.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: LUNCH.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'Dinner') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
      ITEM: item,
      LOADING: DINNER.LOADING,
      REDUX: DINNER.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: DINNER.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINNER.LOADED
    })
  }
  if(title === 'Snack') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
      ITEM: item,
      LOADING: SNACK.LOADING,
      REDUX: SNACK.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: SNACK.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: SNACK.LOADED
    })
  }
}


///////////////////////////////////////////////////////
////////////////////  DELETE ITEM  ////////////////////
///////////////////////////////////////////////////////


export const deleteItemFromTable = ({ title, _id }) => {
  if(title === 'Breakfast') {
    return DELETE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/delete-item`,
      ID: _id,
      LOADING: BREAKFAST.LOADING,
      SUCCESS_TYPE: BREAKFAST.DELETE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: BREAKFAST.LOADED
    })
  }
  if(title === 'Lunch') {
    return DELETE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/delete-item`,
      ID: _id,
      LOADING: LUNCH.LOADING,
      SUCCESS_TYPE: LUNCH.DELETE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'Dinner') {
    return DELETE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/delete-item`,
      ID: _id,
      LOADING: DINNER.LOADING,
      SUCCESS_TYPE: DINNER.DELETE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINNER.LOADED
    })
  }
  if(title === 'Snack') {
    return DELETE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/delete-item`,
      ID: _id,
      LOADING: SNACK.LOADING,
      SUCCESS_TYPE: SNACK.DELETE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: SNACK.LOADED
    })
  }
}

///////////////////////////////////////////////////////////////////////
////////////////////  DELETE ITEM ONLY FROM REDUX  ////////////////////
///////////////////////////////////////////////////////////////////////

export const deleteItemFromREDUX = ({ title, _id }) => dispatch => {
  if(title === 'Breakfast') {
    return dispatch({ type: BREAKFAST.DELETE_ITEM, payload: _id })
  }
  if(title === 'Lunch') {
    return dispatch({ type: LUNCH.DELETE_ITEM, payload: _id })
  }
  if(title === 'Dinner') {
    return dispatch({ type: DINNER.DELETE_ITEM, payload: _id })
  }
  if(title === 'Snack') {
    return dispatch({ type: SNACK.DELETE_ITEM, payload: _id })
  }
}


export const clearMealErrors = () => {}