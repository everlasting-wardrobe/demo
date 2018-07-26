import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import './studio.css';


// Warning! For NextWardrobeTracker the total width should be 100vw;

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div className={"studio"}>
      <Feedback boxReviewData={boxReviewData}/>
      <div className={"studio-container"} >
        <NextWardrobeTracker width={0.2}/>
        <SizeTracker width={0.2}/>
        <Equalizer width={0.39}/>
        <ColorPickerSet width={0.2}/>
      </div>
    </div>
  )
}

export default Studio;
