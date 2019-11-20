import { createSelector } from 'reselect';

const select_admin_state = state => state.admin.items;
const select_isLoading_state = state => state.loading.admin.isLoading;
const select_errors_state = state => state.error.admin.error;

export const state_admin = createSelector(
  [select_admin_state],
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