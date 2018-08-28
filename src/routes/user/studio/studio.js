import React, {Component} from 'react';
import Feedback from './feedback/feedback';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import './studio.css';
import PanelBoard from './PanelBoard.jpg';
import {LoadedImg} from './util/util';
import Loadable from 'react-loadable';

const LoadableMixingBoard = Loadable({
  loader: () => import('./MixingBoard'),
  loading: (props) => {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  }
});

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
          <LoadableMixingBoard />
        </div>
      </div>
    )
  }
}

export default Studio;
