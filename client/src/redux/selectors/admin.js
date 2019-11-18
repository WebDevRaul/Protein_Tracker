import { createSelector } from 'reselect';

const select_errors_state = state => state.error.admin;
const select_isLoading_state = state => state.loading.admin;

export const state_form_isLoading = createSelector(
  [select_isLoading_state],
  state => state.form.isLoading
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);