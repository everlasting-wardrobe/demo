import React from 'react';
import './util.css';

export function withPanelBackground(WrappedComponent){
  return (props) => {
    return(
      <div className={'panel-background'}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
