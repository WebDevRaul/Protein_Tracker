import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

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