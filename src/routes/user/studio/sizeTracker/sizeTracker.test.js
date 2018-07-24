import React from 'react';
import ReactDOM from 'react-dom';
import SizeTracker from './sizeTracker';
import {shallow, mount} from 'enzyme';


// shallow rendering
it('somke test without crashing', ()=>{
  shallow(<SizeTracker />);
})

// full dom rendering
it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<SizeTracker />);
  expect(wrapper.find('.size-tracker-image')).toHaveLength(2);
  expect(wrapper.find('.size-tracker-up-arrow')).toHaveLength(2);
  expect(wrapper.find('.size-tracker-down-arrow')).toHaveLength(2);
})
