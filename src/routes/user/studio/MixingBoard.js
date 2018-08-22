import React, {Component} from 'react';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import StyleBalancer from './styleBalancer/styleBalancerContainer';
import './studio.css';
import TopPanel from './topPanel/topPanel';
import PanelBoard from './PanelBoard.jpg';
import {LoadedImg} from './util/util';
import Loadable from 'react-loadable';


const MixingBoard = () => {
  return(
    <div className={"studio-container"} >
      <div className={"top-panel-padding-div"}>
        <TopPanel />
      </div>
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
    </div>
  )
}

export default MixingBoard;
