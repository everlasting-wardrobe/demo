import React, {Component} from 'react';
import AMFMWebp from './StylePresetsTuner.webp';
import AMFMPng from './StylePresetsTuner.png';
import './amfm.css';
import {LoadedImg} from '../util/util';

const AMFM = ({rest})=>{
  // 62.5 it's a fixed value which will just fill the points area;
  let width = 70.3 / 30 * rest;
  return (
    <div className={'amfm'}>
      <div className={'amfm-img-wrapper'}>
        <div style={{position: 'relative'}}>
          <div
            style={{paddingBottom: '41%'}}
          />
          <LoadedImg
            src = {AMFMWebp}
            className={'amfm-img'}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          />
        </div>
        <div
          className={'amfm-points'}
          style={{
            width: `${width}%`,
            zIndex: 3,
          }}/>
      </div>
    </div>
  )
}

export default AMFM;
