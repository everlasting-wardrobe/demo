import React from 'react';
import NameCard from './nameCard';
import {shallow, mount} from 'enzyme';


// shallow rendering
it('smoke test without crashing', ()=>{
  shallow(<NameCard />);
})

// full dom rendering
it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<NameCard />);
  expect(wrapper.find('.name-card-set')).toHaveLength(1);
  expect(wrapper.find('.name-card-wrapper')).toHaveLength(1);
  expect(wrapper.find('.name-card-label-wrapper')).toHaveLength(1);
  expect(wrapper.find('.name-card-window-wrapper')).toHaveLength(1);
  expect(wrapper.find('.name-card-window')).toHaveLength(1);
  expect(wrapper.find('.name-card-value')).toHaveLength(1);
})