import { 
  ADD_PRODUCT, 
  FIND_PRODUCTS, 
  ADD_BREAKFAST_OFFLINE, 
  ADD_LUNCH_OFFLINE, 
  ADD_DINER_OFFLINE, 
  ADD_SNACK_OFFLINE,
  DELETE_PRODUCT,
  DELETE_ALL,
  NEW_QUANTITY,
  UPDATE_BREAKFAST_OFFLINE,
  UPDATE_LUNCH_OFFLINE,
  UPDATE_DINER_OFFLINE,
  UPDATE_SNACK_OFFLINE,
    } from '../actions/types';

const initialState = {
  item: {},
  newQuantityItem: {},
  breakfast: [],
  diner: [],
  lunch: [],
  snack: [],
};

export default function(state=initialState, action) {

  // Filter by table_id
  const filterByID = data => item => {
    if (item.table_id === data) {
      return true
    };
  };

  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        item: action.payload
      }
    case FIND_PRODUCTS:
      return {
        ...state,
        breakfast: action.payload.filter(filterByID('breakfast')),
        diner: action.payload.filter(filterByID('diner')),
        snack: action.payload.filter(filterByID('snack')),
        lunch: action.payload.filter(filterByID('lunch')),
      }
    case ADD_BREAKFAST_OFFLINE:
      return {
        ...state,
        breakfast: [...state.breakfast, action.payload]
      }
    case ADD_LUNCH_OFFLINE:
      return {
        ...state,
        lunch: [...state.lunch, action.payload]
      }
    case ADD_DINER_OFFLINE:
      return {
        ...state,
        diner: [...state.diner, action.payload]
      }
    case ADD_SNACK_OFFLINE:
      return {
        ...state,
        snack: [...state.snack, action.payload]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        breakfast: state.breakfast.filter(item => item._id !== action.payload),
        lunch: state.lunch.filter(item => item._id !== action.payload),
        diner: state.diner.filter(item => item._id !== action.payload),
        snack: state.snack.filter(item => item._id !== action.payload),
      }
    case DELETE_ALL:
      return {
        breakfast: [],
        lunch: [],
        diner: [],
        snack: []
      }
    case NEW_QUANTITY:
      return {
        ...state,
        newQuantityItem: action.payload
      }
    case UPDATE_BREAKFAST_OFFLINE:
      return {
        ...state,
        breakfast: state.breakfast.map(i => {return  i._id === action.payload.id ? {...i, quantity: action.payload.newQuantity, temp_calories: action.payload.newCalories, temp_protein: action.payload.newProtein, temp_fat: action.payload.newFat, temp_carbohydrates: action.payload.newCarbohydrates } : {...i} })
      }
    case UPDATE_LUNCH_OFFLINE:
      return {
        ...state,
        lunch: state.lunch.map(i => {return  i._id === action.payload.id ? {...i, quantity: action.payload.newQuantity, temp_calories: action.payload.newCalories, temp_protein: action.payload.newProtein, temp_fat: action.payload.newFat, temp_carbohydrates: action.payload.newCarbohydrates } : {...i} })
      }
    case UPDATE_DINER_OFFLINE:
      return {
        ...state,
        diner: state.diner.map(i => {return  i._id === action.payload.id ? {...i, quantity: action.payload.newQuantity, temp_calories: action.payload.newCalories, temp_protein: action.payload.newProtein, temp_fat: action.payload.newFat, temp_carbohydrates: action.payload.newCarbohydrates } : {...i} })
      }
    case UPDATE_SNACK_OFFLINE:
      return {
        ...state,
        snack: state.snack.map(i => {return  i._id === action.payload.id ? {...i, quantity: action.payload.newQuantity, temp_calories: action.payload.newCalories, temp_protein: action.payload.newProtein, temp_fat: action.payload.newFat, temp_carbohydrates: action.payload.newCarbohydrates } : {...i} })
      }
    default:
      return state;
  }
};