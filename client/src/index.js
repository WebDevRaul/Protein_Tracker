import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import HttpsRedirect from 'react-https-redirect';
import jwt_decode from 'jwt-decode';
import { setAuthToken, setCurrentUser, signOut } from './redux/actions/user';
import * as serviceWorker from './serviceWorker';

import App from './App';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// Check Token
if (localStorage.PTracker_token) {
  const { PTracker_token } = localStorage;
  const { exp } = jwt_decode(PTracker_token);
  const time = Date.now() / 1000;

  // Sign-In user
  setAuthToken(PTracker_token);
  store.dispatch(setCurrentUser(PTracker_token));

  // Sign-Out user
  if(exp < time) store.dispatch(signOut());
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <>
          <ReduxToastr position='bottom-right' transitionIn='fadeIn' transitionOut='fadeOut' />
          <App />
        </>
      </Router>
    </PersistGate>
  </Provider> 
, document.getElementById('root'));

serviceWorker.unregister();