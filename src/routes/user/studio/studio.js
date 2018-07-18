import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import BoxCountDown from './boxCountDown/boxCountDown';
import SizeTracker from './sizeTracker/sizeTracker';
import './studio.css';

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div>
      <Feedback boxReviewData={boxReviewData}/>
      <div className={'equalizer-wrapper'}>
        <Equalizer />
      </div>
      <div className={'color-picker-set-wrapper'}>
        <ColorPickerSet />
      </div>
      <div className={'box-count-down-wrapper'}>
        <BoxCountDown />
      </div>
      <div className={'size-tracker-wrapper'}>
        <SizeTracker />
      </div>
    </div>
  )
}

export default Studio;
