import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Project imports 

import LoginPage from './pages/Login';


function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;