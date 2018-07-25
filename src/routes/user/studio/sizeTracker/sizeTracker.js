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
import {withPanelBackground} from '../util';

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
      sizeRange : this.props.sizeRange,
      topSizeIndex : this.props.topSizeIndex,
      bottomSizeIndex : this.props.bottomSizeIndex,
      width: this.props.width,
    }
  }

  saveState(categoryName, action){
    const category = categoryName === 'top'? 'topSizeIndex' : 'bottomSizeIndex';
    if(action === 'add' && this.state[category] < 11 ){
      this.setState((prevState)=>{
        return {[category] : prevState[category] + 1}
      })
    }else if(action === 'minus' && this.state[category] > 0){
      this.setState((prevState)=>{
        return {[category] : prevState[category] - 1}
      })
    }
  }

  constructOnClick(categoryName, action){
    let onClick = () => {
      console.log('onClick is called');
      this.saveState(categoryName, action);
    }
    onClick = onClick.bind(this);
    return onClick;
  }

  render(){
    return (
      <div className={'size-tracker'} style={{width:`${100 * this.state.width}vw`}}>
        <h3 className={"size-tracker-title"} style={{fontSize:`${10 * this.state.width}vw`}}>{"-SIZE UPDATER-"}</h3>
        <div className={"size-tracker-unit-wrapper"}>
          <SizeTrackerUnit trackerName={"TOP"}
            value={this.state.sizeRange[this.state.topSizeIndex]}
            onUpClick={this.constructOnClick('top', 'add')}
            onDownClick={this.constructOnClick('top', 'minus')}
            width={this.state.width}/>
        </div>
        <div className={"size-tracker-unit-wrapper"}>
          <SizeTrackerUnit trackerName={"BOTTOM"}
            value={this.state.sizeRange[this.state.bottomSizeIndex]}
            onUpClick={this.constructOnClick('bottom', 'add')}
            onDownClick={this.constructOnClick('bottom', 'minus')}
            width={this.state.width}/>
        </div>
        <div className={"size-tracker-decoration"}>
            <img className={"size-tracker-headphones-jack"} src={HeadphoneJack} alt={""} />
            <div className={"size-tracker-knob-container"}>
              <img className={"size-tracker-knob"} src={KnobHigh} alt={""}/>
              <img className={"size-tracker-knob"} src={KnobLow} alt={""}/>
              <img className={"size-tracker-knob"} src={KnobHigh} alt={""}/>
            </div>
        </div>
      </div>
    )
  }
}


SizeTracker.defaultProps = {
  sizeRange : ['6M', '01', '02', '03', '04','05','06','07','08','10','12','14'],
  topSizeIndex: 0,
  bottomSizeIndex: 0,
  width: 1,
}

export default SizeTracker;
