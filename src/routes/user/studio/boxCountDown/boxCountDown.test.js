import React from 'react';
import ReactDOM from 'react-dom';
import BoxCountDown from './boxCountDown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoxCountDown />, div);
});
