import React from 'react';
import Signup from './signup';
import Studio from './studio/studio';
import HeaderMenuContainer from '../../containers/headerMenuContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const User = () => {
  return (
    <div>
      <HeaderMenuContainer color='black' />
      <Router>
        <Switch>
          <Route path={'/user/signup'} component={Signup} />
          <Route path={'/user/studio'} component={Studio} />
        </Switch>
      </Router>
    </div>
  )
}

export default User;
