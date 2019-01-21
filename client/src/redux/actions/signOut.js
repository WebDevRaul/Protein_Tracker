import setAuthToken from '../../components/auth/utils/setAuthToken';
import { setCurrentUser } from './login_user';

// Sign out user
export const logoutUser = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Clear user (Redux)
  dispatch(setCurrentUser({}));
};