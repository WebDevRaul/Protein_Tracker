import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Private_Route';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Sign_In from './pages/sign_in/Sign_In';
import Dashboard from './pages/dashboard/Dashboard';
import Admin from './pages/admin/Admin';
import NotFound from './pages/not_found/Not_Found';
import Footer from './layout/footer/Footer';

import './app.css';


const App = () => {
  return (
    <div className='app bg-light'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/sign-in' component={Sign_In} />
        <Route exact path='/register' component={Register} />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/admin' component={Admin} />

        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
