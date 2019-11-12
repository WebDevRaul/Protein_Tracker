import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import Home from './components/links/Home';

import './css/App.css';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
