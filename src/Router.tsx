import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './screens/Main';
import Users from './screens/Users';
import Statistics from './screens/Statistics';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route exact path='/users/:id'>
          <Statistics />
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
