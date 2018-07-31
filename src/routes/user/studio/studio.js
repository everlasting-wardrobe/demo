import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
<<<<<<< HEAD
import NameCard from './nameCard/nameCard';
=======
import StyleBalancer from './styleBalancer/styleBalancerContainer';
>>>>>>> 0ea93063b9a02706f1214e8a471eb485e5caf2b4
import './studio.css';


// Warning! For NextWardrobeTracker the total width should be 100vw;

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div className={"studio"}>
      <Feedback boxReviewData={boxReviewData}/>
      <div className={"studio-container-wrapper"}>
        <div className={"studio-container"} >
          <div className={"next-wardrobe-tracker-wrapper"}>
            <NextWardrobeTracker width={0.2}/>
          </div>
          <div className={"size-tracker-wrapper"}>
            <SizeTracker width={0.2}/>
          </div>
          <div className={"equalizer-wrapper"}>
            <Equalizer width={0.4}/>
          </div>
          <div className={"colorpicker-set-wrapper"}>
            <ColorPickerSet width={0.4}/>
          </div>
          <div className={"style-balancer-wrapper"}>
            <StyleBalancer />
          </div>
        </div>
        <NameCard width={0.3} />
      </div>
    </div>
  )
}

export default Studio;
