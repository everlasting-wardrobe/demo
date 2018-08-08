import React from 'react';
import Feedback from './feedback/feedback';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import StyleBalancer from './styleBalancer/styleBalancerContainer';
import {PatternPannelWithBackground} from './PatternPad/patternPad';

import './studio.css';
import NameCard from './nameCard/nameCard';
import TopPanel from './topPanel/topPanel';

// Warning! For NextWardrobeTracker the total width should be 100vw;

const Studio = () => {
  const boxReviewData = boxReviewDataGenerator();
  return (
    <div className={"studio"}>
      <Feedback boxReviewData={boxReviewData}/>
      <div className={"studio-container-wrapper"}>
        <div className={"studio-container"} >
          <TopPanel />
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
            <StyleBalancer width={0.18}/>
          </div>
          <div className={"patternPannel-wrapper"}>
            <PatternPannelWithBackground width={0.4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studio;
