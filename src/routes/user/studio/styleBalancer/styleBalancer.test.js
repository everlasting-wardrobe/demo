import React from 'react';
import ReactDOM from 'react-dom';
import StyleBalancer from './styleBalancer';
import {shallow, mount} from 'enzyme';

it('somke test without crashing', ()=>{
  shallow(<StyleBalancer />);
})


it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<StyleBalancer />);
  expect(wrapper.find('.style-balancer-slider-container')).toHaveLength(1);
  // expect(wrapper.find('.size-tracker-up-arrow')).toHaveLength(2);
  // expect(wrapper.find('.size-tracker-down-arrow')).toHaveLength(2);
})
