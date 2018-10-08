import React, {Component} from 'react';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import StyleBalancer from './styleBalancer/styleBalancerContainer';
import {PatternPannelWithBackground} from './PatternPad/patternPad';
import './studio.css';
import TopPanel from './topPanel/topPanel';
import {connect} from 'react-redux';
import {fetchMixingBoardData} from '../../routerAction';
import SwipeApp from './swipeApp/swipeAppComingSoon.png';
import axios from 'axios';


class MixingBoard extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios('/api/v1/boxes/users/preference/leeweiss81@gmail.com', {
      method:'get',
      headers: {
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzYxNjI5NjksImV4cCI6MTUzNjE4NDU2OX0.mfjZ3ivI8k8u-K_XempS6DHxJJZKO8c0LghgnGZ0V1s',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(response => {
      this.props.fetchMixingBoardData(response.data);
    });
  }

  render(){
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
          <Equalizer width={0.395}/>
        </div>
        <div className={"colorpicker-set-wrapper"}>
          <ColorPickerSet width={0.4}/>
        </div>
        <div className={"style-balancer-wrapper"}>
          <StyleBalancer width={0.18}/>
        </div>
        <div>
          <img src = {SwipeApp}  style={{width: '18vw'}} alt={"Swipe App Comming Soon!"}/>
        </div>
        <div className={"pattern-Pad-wrapper"}>
          <PatternPannelWithBackground width={0.4}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMixingBoardData: (data)=>{
      const action = fetchMixingBoardData(data);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(MixingBoard);
