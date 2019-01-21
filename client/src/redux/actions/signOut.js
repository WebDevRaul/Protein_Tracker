import setAuthToken from '../../components/auth/utils/setAuthToken';

// Sign out user
export const logoutUser = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
};