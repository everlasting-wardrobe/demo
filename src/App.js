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
import Navbar from './view/navbar/navbar';
import User from './routes/user/user';
import Homepage from './routes/homepage';
import Studio from './routes/user/studio/studio';


export default class App extends Component {
  render() {
    return (
      <div>
            <Navbar />
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} component={Studio} />
            </Switch>
      </div>
    );
  }
}
