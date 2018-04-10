import React from 'react';
import Hiw from '../components/hiw'
import Pricing from '../components/pricing'
import Benefit from '../components/benefit'
import EcoFriendly from '../components/ecoFriendly'
import Header from '../components/header'

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
