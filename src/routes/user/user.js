import React from 'react';
import Signup from './signup/signup';
import Studio from './studio/studio';
import SizeConverter from './sizeConverter/sizeConverter';
import HeaderMenuContainer from '../../containers/headerMenuContainer';
import Login from '../../view/user/login'; 
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from '../../view/navbar/navbar';
      // <HeaderMenuContainer color='black' />
const User = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={'/user/signup'} component={Signup} />
          <Route path={'/user/studio'} component={Studio} />
          <Route path={'/user/size-converter'} component={SizeConverter} />
          <Route path={'/user/landing-page'} component={Navbar} />
          <Route path={'/user/login'} component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default User;
