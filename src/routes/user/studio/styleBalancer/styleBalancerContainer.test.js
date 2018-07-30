import React from 'react';
import ReactDOM from 'react-dom';
import StyleBalancerContainer from './styleBalancerContainer';
import {shallow, mount} from 'enzyme';

it('somke test without crashing', ()=>{
  shallow(<StyleBalancerContainer />);
})


it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<StyleBalancerContainer />);
  // expect(wrapper.find('.size-tracker-image')).toHaveLength(2);
  // expect(wrapper.find('.size-tracker-up-arrow')).toHaveLength(2);
  // expect(wrapper.find('.size-tracker-down-arrow')).toHaveLength(2);
})
