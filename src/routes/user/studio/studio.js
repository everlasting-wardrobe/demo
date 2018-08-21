import React, {Component} from 'react';
import Feedback from './feedback/feedback';
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

// Warning! For NextWardrobeTracker the total width should be 100vw;

class Studio extends Component{
  constructor(props){
    super(props);
    this.state = {
      LowPartBackgroundLoaded : false,
    }
    this.onImageLoaded = this.onImageLoaded.bind(this);
  }

  onImageLoaded = () => {
    this.setState({LowPartBackgroundLoaded: true});
    console.log("Studio onImageLoaded called");
  }

  render(){
    const boxReviewData = boxReviewDataGenerator();
    return (
      <div className={"studio"}>
        <div className={"feedback-wrapper"}>
          <Feedback boxReviewData={boxReviewData}/>
        </div>
        <div className={"studio-container-wrapper"}>
          {!this.state.LowPartBackgroundLoaded && (
            <div className="studio-placeholder" />
          )}
          <LoadedImg
            src={PanelBoard} className={"studio-background"}
            onLoad = {this.onImageLoaded}
          />
          {this.state.LowPartBackgroundLoaded && (
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
          )}
        </div>
      </div>
    )
  }
}

export default Studio;
