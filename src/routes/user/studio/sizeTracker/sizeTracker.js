import React, {Component} from 'react';
import TopSizeTracker from './TopSizeTracker.png';
import BottomSizeTracker from './BottomSizeTracker.png';
import SizeTrackerWindow from './SizeTrackerWindow.png';
import KnobHigh from './KnobHigh.png';
import KnobLow from './KnobLow.png';
import KnobMid from './KnobMid.png';
import HeadphoneJack from './HeadphonesJack.png';
import DownArrow from './DownArrow.png';
import UpArrow from './UpArrow.png';
import './sizeTracker.css';
import {withPanelBackground} from '../util/util';
import {connect} from 'react-redux';
import {updateSizeUpdater} from '../../../routerAction';

const SizeTrackerUnit = ({trackerName, value, onUpClick, onDownClick, width}) => {
  return (
    <div className={"size-tracker-unit"}>
      <p className={"size-tracker-name"}  style={{fontSize:`${10 * width}vw`}}>{trackerName}</p>
      <div className={"size-tracker-display"} >
        <img src={SizeTrackerWindow} alt={""} />
      </div>
      <div className={'size-tracker-value-wrapper'} style={{fontSize:`${10 * width}vw`}}>
        <p className={'size-tracker-value top-size-tracker-value'}>{value}</p>
      </div>
      <div className={"size-tracker-adjust"}>
        <img className={"size-tracker-adjust-img"} src={UpArrow} alt={""} onClick={onUpClick}/>
        <img className={"size-tracker-adjust-img"} src={DownArrow} alt={""} onClick={onDownClick}/>
      </div>
    </div>
  )
}

SizeTrackerUnit.defaultProps={
  trackerName: 'TRACKER',
  value: '04',
  width: 1,
}

class SizeTracker extends Component{
  constructor(props){
    super(props);
    this.state = {
      topSize: this.props.topSize,
      bottomSize: this.props.bottomSize,
      width: this.props.width,
      onTopAddClick: this.props.onTopAddClick,
      onTopMinusClick: this.props.onTopMinusClick,
      onBottomAddClick: this.props.onBottomAddClick,
      onBottomMinusClick: this.props.onBottomMinusClick,
    }
  }

  componentWillReceiveProps({topSize, bottomSize}){
    this.setState({topSize, bottomSize});
  }

  render(){
    return (
      <div className={'size-tracker'} style={{width:`${100 * this.state.width}vw`}}>
        <h3 className={"size-tracker-title"} style={{fontSize:`${10 * this.state.width}vw`}}>{"-SIZE UPDATER-"}</h3>
        <div className={"size-tracker-unit-wrapper"}>
          <SizeTrackerUnit trackerName={"TOP"}
            value={this.state.topSize}
            onUpClick={this.state.onTopAddClick}
            onDownClick={this.state.onTopMinusClick}
            width={this.state.width}/>
        </div>
        <div className={"size-tracker-unit-wrapper"}>
          <SizeTrackerUnit trackerName={"BOTTOM"}
            value={this.state.bottomSize}
            onUpClick={this.state.onBottomAddClick}
            onDownClick={this.state.onBottomMinusClick}
            width={this.state.width}/>
        </div>
        <div className={"size-tracker-decoration"}>
            <img className={"size-tracker-headphones-jack"} src={HeadphoneJack} alt={""} />
            <div className={"size-tracker-knob-container"}>
              <img
                className={"size-tracker-knob"}
                src={KnobHigh}
                alt={""}
              />
              <img
                className={"size-tracker-knob"}
                src={KnobLow}
                alt={""}
              />
              <img
                className={"size-tracker-knob"}
                src={KnobHigh}
                alt={""}
              />
            </div>
        </div>
      </div>
    )
  }
}


SizeTracker.defaultProps = {
  topSize: '6M',
  bottomSize: '6M',
  bottomSizeIndex: 0,
  width: 1,
}

const mapStateToProps = (state, ownProps) => {
  const sizeUpdaterData = state.sizeUpdaterReducer;
  return ({
    topSize: sizeUpdaterData.sizeTrackerRange[sizeUpdaterData.topSizeIndex],
    bottomSize: sizeUpdaterData.sizeTrackerRange[sizeUpdaterData.bottomSizeIndex],
    ...ownProps,
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTopAddClick : () => {
      dispatch(updateSizeUpdater('add', 'top'));
    },
    onTopMinusClick: () => {
      dispatch(updateSizeUpdater('minus', 'top'));
    },
    onBottomAddClick: ()=>{
      dispatch(updateSizeUpdater('add', 'bottom'));
    },
    onBottomMinusClick: () => {
      dispatch(updateSizeUpdater('minus', 'bottom'));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withPanelBackground(SizeTracker));
