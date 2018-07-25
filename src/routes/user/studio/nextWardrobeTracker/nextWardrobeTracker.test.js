import React from 'react';
import ReactDOM from 'react-dom';
import NextWardrobeTracker from './nextWardrobeTracker';
import {shallow, mount} from 'enzyme';

it('somke test without crashing', ()=>{
  shallow(<NextWardrobeTracker />);
})
