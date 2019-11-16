import { createSelector } from 'reselect';

const select_isAuth_state = state => state.user.isAuth;
const select_errors_state = state => state.user.errors;
const select_isLoading_state = state => state.user.isLoading;

export const state_isAuth = createSelector(
  [select_isAuth_state],
  state => state
);

export const state_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);