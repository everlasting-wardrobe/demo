import React from 'react';
import ReactDOM from 'react-dom';
import StyleBalancerContainer from './styleBalancerContainer';
import {shallow, mount} from 'enzyme';

it('somke test without crashing', ()=>{
  shallow(<StyleBalancerContainer />);
})


it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<StyleBalancerContainer />);
  expect(wrapper.find('.style-balancer-slider-suit')).toHaveLength(3);
})
