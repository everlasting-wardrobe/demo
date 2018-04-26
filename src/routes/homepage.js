import React from 'react';
import Hiw from '../components/hiw'
import Pricing from './landingPage/pricing'
import Benefit from './landingPage/benefit'
import EcoFriendly from './landingPage/ecoFriendly'
import Header from './landingPage/header'
import Signup from './user/signup/signup'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hiw />
      <Pricing />
      <Benefit />
      <EcoFriendly />
      <Signup />
    </div>
  )
}

export default Homepage;
