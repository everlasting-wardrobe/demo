import React, {Component} from 'react';
import DashBoard from './DaysRemainingDashBoard.png';
import DashBoardArm from './DaysRemainingArm.png';
import './daysRemainingDashBoard.css';
import ArmCover from './DaysRemainingCircel.png';

const DaysRemainingDashBoard = ({days}) => {
  let deg = 146 / 30 * days + 20;
  return(
    <div id={'days-remaining-dash-board'}>
      <img className={`box-count-down-dash-board`} src={DashBoard} />
      <img className={`box-count-down-dash-board-arm`}
        src={DashBoardArm}
        style={{transform: `rotate(-${deg}deg)`}}
         />
      <img className={'box-count-down-arm-cover'} src={ArmCover}/>
    </div>
  )
}

DaysRemainingDashBoard.defaultProps={
  days: 15,
}

export default DaysRemainingDashBoard;
