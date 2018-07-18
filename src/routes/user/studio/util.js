import React from 'react';
import './util.css';
import Screw from './Screw.png';

export function withPanelBackground(WrappedComponent){
  return (props) => {
    return(
      <div className={'panel-background'} {...props}>
        <WrappedComponent style={{width: '90%', padding: '3% 0 3% 0'}} />
        <img src={Screw} className={'screw-top-left'}/>
        <img src={Screw} className={'screw-top-right'}/>
        <img src={Screw} className={'screw-bottom-left'}/>
        <img src={Screw} className={'screw-bottom-right'}/>
      </div>
    )
  }
}
