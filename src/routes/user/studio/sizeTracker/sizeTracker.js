import React, {Component} from 'react';
import TopSizeTracker from './TopSizeTracker.png';
import BottomSizeTracker from './BottomSizeTracker.png';
import DownArrow from './DownArrow.png';
import UpArrow from './UpArrow.png';
import './sizeTracker.css';
import {withPanelBackground} from '../util';

class SizeTracker extends Component{
  constructor(props){
    super(props);
    this.state = {
      sizeRange : this.props.sizeRange,
      topSizeIndex : this.props.topSizeIndex,
      bottomSizeIndex : this.props.bottomSizeIndex,
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
      <div className={'size-tracker'}>
        <div className={'size-tracker-image-wrapper'}>
          <img src={TopSizeTracker} className={'size-tracker-image'} alt={'Top Size Tracker'}/>
          <div className={'size-tracker-up-arrow-wrapper'} onClick={this.constructOnClick('top', 'add')}>
            <img src={UpArrow} className={'size-tracker-up-arrow'} />
          </div>
          <div className={'size-tracker-down-arrow-wrapper'} onClick={this.constructOnClick('top', 'minus')}>
            <img src={DownArrow} className={'size-tracker-down-arrow'} />
          </div>
          <div className={'size-tracker-value-wrapper'}>
            <p className={'size-tracker-value'}>{this.state.sizeRange[this.state.topSizeIndex]}</p>
          </div>
        </div>
        <div className={'size-tracker-image-wrapper'}>
          <img src={BottomSizeTracker} className={'size-tracker-image'} alt={'Bottom Size Tracker'}/>
          <div className={'size-tracker-up-arrow-wrapper'} onClick={this.constructOnClick('bottom', 'add')}>
            <img src={UpArrow} className={'size-tracker-up-arrow'} />
          </div>
          <div className={'size-tracker-down-arrow-wrapper'} onClick={this.constructOnClick('bottom', 'minus')}>
            <img src={DownArrow} className={'size-tracker-down-arrow'} />
          </div>
          <div className={'size-tracker-value-wrapper'}>
            <p className={'size-tracker-value'}>{this.state.sizeRange[this.state.bottomSizeIndex]}</p>
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
}

export default withPanelBackground(SizeTracker);
