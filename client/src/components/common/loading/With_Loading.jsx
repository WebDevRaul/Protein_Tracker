import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from './loading/Loading';


const WithLoading = () => (
  <Switch>
    <Route exact path='/dashboard' component={Loading} />
    <Route exact path='/admin' component={Loading} />
  </Switch>
)

export default WithLoading;