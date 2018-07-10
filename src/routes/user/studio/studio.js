import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import './studio.css';

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div>
      <Feedback boxReviewData={boxReviewData}/>
      <div className={'equalizer-wrapper'}>
        <Equalizer />
      </div>
    </div>
  )
}

export default Studio;
