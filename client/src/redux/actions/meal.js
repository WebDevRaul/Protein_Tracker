import axios from 'axios';
import { MEAL, BREAKFAST, LUNCH, DINER, SNACK } from './types';
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


////////////////////////////////////////////////////
////////////////////  ADD ITEM  ////////////////////
////////////////////////////////////////////////////


export const addItemToTable = ({ data, title }) => {
  if(title === 'Breakfast') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
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
      LOADING: LUNCH.LOADING,
      REDUX: LUNCH.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: LUNCH.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'Diner') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      LOADING: DINER.LOADING,
      REDUX: DINER.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: DINER.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINER.LOADED
    })
  }
  if(title === 'Snack') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
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


export const updateItemsToTable = ({ data, title, temp, _id }) => {
  if(title === 'Breakfast') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
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
      LOADING: LUNCH.LOADING,
      REDUX: LUNCH.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: LUNCH.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'Diner') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
      LOADING: DINER.LOADING,
      REDUX: DINER.UPDATE_ITEM_REDUX,
      SUCCESS_TYPE: DINER.UPDATE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINER.LOADED
    })
  }
  if(title === 'Snack') {
    return UPDATE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/update-item`,
      DATA: data,
      TEMP: { temp, _id },
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
  if(title === 'Diner') {
    return DELETE_ITEM({
      ENDPOINT: `${URL.meal}/${title}/delete-item`,
      ID: _id,
      LOADING: DINER.LOADING,
      SUCCESS_TYPE: DINER.DELETE_ITEM,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINER.LOADED
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


export const clearMealErrors = () => {


}