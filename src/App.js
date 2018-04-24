import React, { Component } from 'react'
import './App.css'
import Service from './routes/service'
import Homepage from './routes/homepage'
import User from './routes/user/user';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
