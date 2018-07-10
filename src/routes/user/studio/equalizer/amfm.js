import React, {Component} from 'react';
import AMFMImg from './AMFM.png';
import './amfm.css';

const AMFM = ({rest, onResetClick})=>{
  // 62.5 it's a fixed value which will just fill the points area;
  let width = 68.3 / 30 * rest;
  return (
    <div className={'amfm'}>
      <div className={'amfm-img-wrapper'}>
        <img src = {AMFMImg} className={'amfm-img'} />
        <div className={'amfm-reset amfm-button'} onClick={onResetClick}/>
        <div className={'amfm-save amfm-button'} />
        <div className={'amfm-points'} style={{width: `${width}%`}}/>
      </div>
    </div>
  )
}

export default AMFM;
