import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Set authentification
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/auth/utils/setAuthToken';
import { setCurrentUser } from './redux/actions/login_user';
 
// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// CSS
import './css/App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Router>
              <div className='container'>
                <Navbar />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Footer />
              </div>
            </Router>
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default App;
