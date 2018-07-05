import React from 'react';
import AMFMImg from './AMFM.png';
import './amfm.css';

const AMFM = ()=>{
  return (
    <div className={'amfm'}>
      <img src = {AMFMImg} className={'img'} />
      <div className={'amfm-points'} style={{width: '62.5%'}}/>
    </div>
  )
}

export default AMFM;
