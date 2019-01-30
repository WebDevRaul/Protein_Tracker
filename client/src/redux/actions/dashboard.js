import { ADD_ITEM_DASHBOARD } from './types';

// Add item to TableFieldGroup
export const addItem = data => {
  return {
    type: ADD_ITEM_DASHBOARD,
    payload: data
  };
};