import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Index';

const Routes = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default Routes;
