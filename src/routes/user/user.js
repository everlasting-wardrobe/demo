import React from 'react';
import Signup from './signup';
import Studio from './studio/studio';
import HeaderMenuContainer from '../../containers/headerMenuContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RangeSlider from '../../util/rangeSlider.js';
import HtmlSlider from '../../util/htmlSlider.js';


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
      <HtmlSlider />
      <RangeSlider vertical={true} />
    </div>
  )
}

export default User;
