import React, {Component} from 'react';
import Feedback from './feedback/feedback';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import './studio.css';
import PanelBoard from './PanelBoard.jpg';
import {
  LoadedImg,
  ErrorBoundary,
  Spinner
} from './util/util';
import Loadable from 'react-loadable';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WORKING_PATH} from '../../../api/constants';


const LoadableMixingBoard = Loadable({
  loader: () => import('./MixingBoard'),
  loading: (props) => {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
      return <Spinner />;
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
  }

  render(){
    const {currentUser} = this.props;

    if(!currentUser){
      return <Redirect to={{pathname : WORKING_PATH + "login"}} />
    }
    const boxReviewData = boxReviewDataGenerator();
    return (
      <ErrorBoundary >
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
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.userReducer.currentUser,
    ...ownProps
  }
}

export default connect(mapStateToProps)(Studio);
