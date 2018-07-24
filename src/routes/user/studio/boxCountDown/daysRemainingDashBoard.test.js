import React from 'react';
import ReactDOM from 'react-dom';
import DaysRemainingDashBoard from './daysRemainingDashBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DaysRemainingDashBoard />, div);
});
