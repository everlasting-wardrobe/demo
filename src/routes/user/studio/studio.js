import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import NameCard from './nameCard/nameCard';
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
        <Equalizer width={0.35}/>
        <div className={'color-picker-set-wrapper'}>
          <ColorPickerSet />
        </div>
        <NameCard width={0.2} userName="Joshua" />
      </div>
    </div>
  )
}

export default Studio;
