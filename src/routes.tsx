import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cities from './components/Pages/Cities';
import Header from './components/Molecules/Header';

const Routes = () => {
  return (
    <React.StrictMode>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Cities">
            <Cities />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default Routes;
