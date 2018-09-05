import React from 'react';
import {Signup} from './signup';
import {HowItWork} from './howItWork';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const UserManagement = () => {
  return (
    <div>
      <Navbar />
      <HowItWork />
      <Footer />
    </div>
  )
}

export default UserManagement;
