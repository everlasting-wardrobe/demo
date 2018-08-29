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
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzU1NjA2MTAsImV4cCI6MTUzNTU4MjIxMH0.cmb_F99zXksbIL4UJ2wyoBaSBIF_1MJ6E2ibZQHlBQk',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(response => {
      console.log(response.data);
      fetchMixingBoardData(response.data);
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMixingBoardData: (data)=>{
      dispatch(fetchMixingBoardData(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(MixingBoard);
