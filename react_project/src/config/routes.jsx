import React, {Component} from 'react';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import Home from '../components/home.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import App from '../components/App.jsx';
import requireAuth from '../utils/auth.js';
import Main from '../components/main.jsx';
import ToWatch from '../components/ToWatch.jsx';
import Watching from '../components/Watching.jsx';
import Watched from '../components/Watched.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={Home}/>
        <Route path="register" component={Register}/>
        <Route path="login" component={Login}/>
        <Route path="app" component={App} onEnter={requireAuth}>
          <Route path="/towatch" component={ToWatch} />
          <Route path="/watching" component={Watching} />
          <Route path="/watched" component={Watched} />
        </Route>
      </Route>
    </Router>
  );
}

export default Routes;
