import React, {Component} from 'react';
import AMFMWebp from './StylePresetsTuner.webp';
import AMFMPng from './StylePresetsTuner.png';
import './amfm.css';

const AMFM = ({rest})=>{
  // 62.5 it's a fixed value which will just fill the points area;
  let width = 70.3 / 30 * rest;
  return (
    <div className={'amfm'}>
      <div className={'amfm-img-wrapper'}>
        <picture className={"amfm-img"}>
          <source srcSet={AMFMWebp} type="image/webp" />
          <source srcSet={AMFMPng} type="image/png" />
        </picture>
        <img src = {AMFMWebp} className={'amfm-img'} />
        <div className={'amfm-points'} style={{width: `${width}%`}}/>
      </div>
    </div>
  )
}

export default AMFM;
