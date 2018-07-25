import React, {Component} from 'react';
import AMFMImg from './StylePresetsTuner.png';
import './amfm.css';

const AMFM = ({rest})=>{
  // 62.5 it's a fixed value which will just fill the points area;
  let width = 70.3 / 30 * rest;
  return (
    <div className={'amfm'}>
      <div className={'amfm-img-wrapper'}>
        <img src = {AMFMImg} className={'amfm-img'} />
        <div className={'amfm-points'} style={{width: `${width}%`}}/>
      </div>
    </div>
  )
}

export default AMFM;
