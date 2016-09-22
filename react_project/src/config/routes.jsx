import React, {Component} from 'react';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';

const Routes = () => {
  return(
  <Router history={hashHistory}>
    <Route path ="/" component={Main} >
      <IndexRoute component={Home} />
    </Route>
  </Router>
  );
}

export default Routes;
