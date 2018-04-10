import React from 'react';
import Hiw from '../components/hiw'
import Pricing from './landingPage/pricing'
import Benefit from './landingPage/benefit'
import EcoFriendly from './landingPage/ecoFriendly'
import Header from './landingPage/header'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hiw />
      <Pricing />
      <Benefit />
      <EcoFriendly />
    </div>
  )
}

export default Homepage;
