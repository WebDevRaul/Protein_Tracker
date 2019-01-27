import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Set authentification
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/auth/utils/setAuthToken';
import { setCurrentUser } from './redux/actions/login_user';  

// Private Route
import PrivateRoute from './components/common/privateRoute';
 
// Components
import Navbar from './components/layout/Navbar';
import Landing from './components/links/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import Home from './components/links/Home';
import About from './components/links/About';
import Dashboard from './components/links/Dashboard';
import Admin from './components/links/Admin';

// Redux
import store from './store';
import { Provider } from 'react-redux';
import { logoutUser } from './redux/actions/signOut';

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

  // Check for expire token
  const currentTiem = Date.now / 1000;
  if (decoded < currentTiem) {
    // SignOut user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
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

                {/* private routes */}

                <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path='/admin' component={Admin} />
                </Switch>
                
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
