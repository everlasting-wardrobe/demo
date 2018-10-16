import React from 'react';
import Signup from './signup/signup';
import Studio from './studio/studio.js';
import SizeConverter from './sizeConverter/sizeConverterStyledComp';
import HeaderMenuContainer from '../../containers/headerMenuContainer';
import Login from '../../view/user/login';
import { Profile } from '../../view/user/profile';
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
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/user/signup'} component={Signup} />
          <Route path={process.env.PUBLIC_URL + '/user/studio'} component={Studio} />
          <Route path={'/user/size-converter'} component={SizeConverter} />
          <Route path={'/user/landing-page'} component={Navbar} />
          <Route path={process.env.PUBLIC_URL + '/user/login'} component={Login} />
          <Route path={'/user/profile'} component={Profile} />
        </Switch>
    </div>
  )
}

export default User;
