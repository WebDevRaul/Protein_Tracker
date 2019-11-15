import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home';

import './app.css';


const App = () => {
  return (
    <div className='app bg-light'>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
