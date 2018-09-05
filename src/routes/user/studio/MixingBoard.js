import React, {Component} from 'react';
import Equalizer from './equalizer/equalizer';
import ColorPickerSet from './colorPickerSet/colorPickerSet';
import boxReviewDataGenerator from './feedback/boxReviewTestData';
import SizeTracker from './sizeTracker/sizeTracker';
import NextWardrobeTracker from './nextWardrobeTracker/nextWardrobeTracker';
import StyleBalancer from './styleBalancer/styleBalancerContainer';
import './studio.css';
import TopPanel from './topPanel/topPanel';
import {connect} from 'react-redux';
import {fetchMixingBoardData} from '../../routerAction';
import axios from 'axios';


class MixingBoard extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios('/api/v1/boxes/users/preference/leeweiss81@gmail.com', {
      method:'get',
      headers: {
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzYwNzc0MzgsImV4cCI6MTUzNjA5OTAzOH0.bUKw1sHeeRbiyh9pgl-GHT_nECfNszv7Bc8Clkd8V6c',
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