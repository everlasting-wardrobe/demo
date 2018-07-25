import React from 'react';
import nextWardrobeTrackerImg from './NextWardrobeWindow.png';
import BoxCountDownBoard from './boxCountDownBoard';
import './nextWardrobeTracker.css';

const NextWardrobeTracker = ({month, day, width}) => {
  return (
    <div style={{width: `${width * 100}vw`}}>
      <div className={"box-count-down-board-wrapper"}>
        <BoxCountDownBoard />
      </div>
      <p className={"next-wardrobe-tracker-text"} style={{fontSize:`${10 * width}vw`}}>
        {"-NEXT WARDROBE-"}
      </p>
      <div className={"next-wardrobe-tracker"}>
        <img className={"next-wardrobe-tracker-image"} src = {nextWardrobeTrackerImg} />
        <div className={'next-wardrobe-tracker-date'}>
          <p style={{fontSize:`${11 * width}vw`}}>
            <span className={'next-wardrobe-tracker-month'}>{month}</span>
            <span className={'next-wardrobe-tracker-day'}>{day}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

NextWardrobeTracker.defaultProps = {
  month: 'SEPTEMBER',
  day: '05',
  width: 1,
}

export default NextWardrobeTracker;
