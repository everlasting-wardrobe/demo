import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import boxReviewDataGenerator from './feedback/boxReviewTestData';

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div>
      <Feedback boxReviewData={boxReviewData}/>
      <Equalizer />
    </div>
  )
}

export default Studio;
