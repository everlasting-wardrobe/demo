import React from 'react';
import {Signup} from './signup';
import {HowItWork} from './howItWork';
import {ForgetPassWordPanel} from './forgetPassword';
import RedeemGiftCard from './redeemGiftCard';
import {WaitList} from './waitlist';
import Footer from '../footer/footer';
import Login from './login';
import {ContactUs} from './contact';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {WORKING_PATH} from '../../api/constants';

const UserManagement = () => {
  return (
    <div style={{minHeight: '100vh'}}>
        <Switch>
          <Route path={WORKING_PATH + 'how-it-works'} component={HowItWork} />
          <Route path={WORKING_PATH + 'signup'} component={Signup} />
          <Route path={WORKING_PATH + 'login'} component={Login} />
          <Route path={WORKING_PATH + 'password/new'} component={ForgetPassWordPanel} />
          <Route path={WORKING_PATH + 'contact-us'} component={ContactUs} />
          <Route path={WORKING_PATH + 'waitlist'} component={WaitList} />
          <Route path={WORKING_PATH + 'redeem-gift-card'} component={RedeemGiftCard} />
        </Switch>
      <Footer />
    </div>
  )
}

export default UserManagement;
