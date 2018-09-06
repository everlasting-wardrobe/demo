import React, {Component} from 'react';
import DashBoard from './DayGauge.png';
import DashBoardArm from './DaysRemainingArm.png';
import './daysRemainingDashBoard.css';
import ArmCover from './DaysRemainingCircel.png';
import {connect} from 'react-redux';
import {LoadedImg} from '../util/util';

const DaysRemainingDashBoard = ({days}) => {
  let deg = 146 / 30 * (30 - Math.min(Math.max(days, 0), 30)) + 20;
  return(
    <div id={'days-remaining-dash-board'}>
      <div className={'box-count-down-placeholder'} />
      <LoadedImg className={`box-count-down-dash-board`} src={DashBoard} />
      <LoadedImg className={`box-count-down-dash-board-arm`}
        src={DashBoardArm}
        style={{transform: `rotate(-${deg}deg)`}}
         />
      <LoadedImg className={'box-count-down-arm-cover'} src={ArmCover}/>
    </div>
  )
}

DaysRemainingDashBoard.defaultProps={
  days: 30,
}

export default DaysRemainingDashBoard;
