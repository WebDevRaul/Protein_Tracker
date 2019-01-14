import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import ProteinTracker from './components/protein_tracker/ProteinTracker';
import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Redux
import store from './store';
import { Provider } from 'react-redux';


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
                <Route exact path='/Protein-Tracker' component={ProteinTracker} />
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
