import React, {Component} from 'react';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import ToWatch from '../components/ToWatch.jsx';
import Watching from '../components/Watching.jsx';
import Watched from '../components/Watched.jsx';

const Routes = () => {
  return(
  <Router history={hashHistory}>
    <Route path ="/" component={Main} >
      <IndexRoute component={Home} />
      <Route path='/towatch'>
      <IndexRoute component={ToWatch}/>
      <Route path='/watching'>
      <IndexRoute component={Watching}/>
      <Route path='/watched'>
      <IndexRoute component={Watched}/>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>
  );
}

export default Routes;
