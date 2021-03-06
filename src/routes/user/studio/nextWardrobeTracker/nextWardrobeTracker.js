import React, {Component} from 'react';
import nextWardrobeTrackerImg from './NextWardrobeWindow.png';
import BoxCountDownBoard from './boxCountDownBoard';
import './nextWardrobeTracker.css';
import {fetchNextWardrobeInfo} from '../../../routerAction';
import {connect} from 'react-redux';
import {LoadedImg} from '../util/util';

class NextWardrobeTracker extends Component{
  constructor(props){
    super(props);
    this.state={
      month: this.props.month,
      day: this.props.day,
      width: this.props.width,
      fetchNextWardrobeInfo: this.props.fetchNextWardrobeInfo,
    }
  }

  componentWillReceiveProps({month, day}){
    this.setState({month, day});
  }

  render(){
    const {month, day, width} = this.state;
      return (
        <div style={{width: `${width * 100}vw`}}>
          <div className={"box-count-down-board-wrapper"}>
            <BoxCountDownBoard days={this.props.daysRemained}/>
          </div>
          <p className={"next-wardrobe-tracker-text"}>
            {"-NEXT WARDROBE-"}
          </p>
          <div className={"next-wardrobe-tracker"}>
            <div className={"next-wardrobe-tracker-placeholder"} />
            <LoadedImg className={"next-wardrobe-tracker-image"} src = {nextWardrobeTrackerImg} alt={""}/>
            <div className={'next-wardrobe-tracker-date'}>
              <p style={{fontSize:`${11 * width}vw`}}>
                <span className={'next-wardrobe-tracker-month'}>{month}</span>
                <span className={'next-wardrobe-tracker-day'}>{day}</span>
              </p>
            </div>
          </div>
        </div>
      )
  }
}

NextWardrobeTracker.defaultProps = {
  month: 'SEPTEMBER',
  day: '05',
  width: 1,
}

const mapStateToProps = (state, ownProps) => {
  const date = new Date(state.mixingBoardReducer.NextWardrobe);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const today = new Date();
  return {
    month: monthNames[date.getMonth()],
    day: date.getDay(),
    daysRemained: Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24)),
    ...ownProps,
  }
}

const NextWardrobeTrackerContainer = connect(mapStateToProps)(NextWardrobeTracker);


export default NextWardrobeTrackerContainer;
