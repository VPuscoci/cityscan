import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cities from './components/Pages/Cities';
import City from './components/Pages/City';
import Header from './components/Molecules/Header';

const Routes = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/Cities">
            <Header />
            <Cities />
          </Route>
          <Route path="/Cities/:cityName">
            <Header />
            <City />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default Routes;
