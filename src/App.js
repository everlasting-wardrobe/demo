import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';
import {asyncLoadable} from './util/util';
import {Spinner} from './routes/user/studio/util/util';
import UserManagement from './view/user/';

const Homepage = asyncLoadable(Loadable({
  loader: ()=> import('./routes/homepage'),
  loading: () => {return <Spinner />}
}));

const User = asyncLoadable(Loadable({
  loader: ()=> import('./routes/user/user'),
  loading: () => {return <Spinner />}
}));

const Service = asyncLoadable( Loadable({
  loader: ()=> import('./routes/service'),
  loading: () => {return <Spinner />}
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
              <Route path={'/test/test'} component={UserManagement} />
            </Switch>
          </Router>
      </div>
    );
  }
}
