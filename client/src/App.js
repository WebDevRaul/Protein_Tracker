import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Set authentification
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/auth/utils/setAuthToken';
import { setCurrentUser } from './redux/actions/login_user';  
import { logoutUser } from './redux/actions/signOut';

// Private Route
import PrivateRoute from './components/common/privateRoute';
 
// Components
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import Home from './components/links/Home';
import DashboardParent from './components/dashboard/DashboardParent';
import Admin from './components/admin/Admin';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// CSS
import './css/App.css';


class App extends Component {

  componentDidMount() {
    // Check Token
    if (localStorage.jwtToken) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken);
      // Decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = '/login';
      }
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />

              {/* private routes */}

              <Switch>
                <PrivateRoute exact path='/dashboard' component={DashboardParent} />
              </Switch>
              <Switch>
                <PrivateRoute exact path='/admin' component={Admin} />
              </Switch>
              
              <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;
