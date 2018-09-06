import React from 'react';
import {Signup} from './signup';
import {HowItWork} from './howItWork';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const UserManagement = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path={'/test/test/how-it-works'} component={HowItWork} />
          <Route path={'/test/test/signup'} component={Signup} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default UserManagement;
