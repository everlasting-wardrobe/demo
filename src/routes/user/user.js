import React from 'react';
import Signup from './signup/signup';
import Studio from './studio/studio';
import HeaderMenuContainer from '../../containers/headerMenuContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const User = () => {
  console.log("User Component Called");
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
