import React, {Component} from 'react';
import DaysRemainingDashBoard from './daysRemainingDashBoard';
import {withPanelBackground} from '../util';

const BoxCountDown = () => {
  return(
    <DaysRemainingDashBoard />
  )
}

export default withPanelBackground(BoxCountDown);
