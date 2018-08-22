import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {asyncLoadable} from './util/util';

const Homepage = asyncLoadable(Loadable({
  loader: ()=> import('./routes/homepage'),
  loading: () => {return <div>Loading...</div>},
  delay: 500,
}));

const User = asyncLoadable(Loadable({
  loader: ()=> import('./routes/user/user'),
  loading: () => {return <div>Loading...</div>},
  delay: 500,
}));

const Service = asyncLoadable( Loadable({
  loader: ()=> import('./routes/service'),
  loading: () => {return <div>Loading...</div>},
  delay: 500,
}));

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/service' component={Service} />
              <Route path='/user' component={User} />
            </Switch>
          </Router>
      </div>
    );
  }
}
