import React from 'react';
import './verticalSlider.css';

const VerticalSlider = (props) => {
  const {style} = props;
  return (
    <div className = {'vertical-slider-wrapper'} style={style}>
      <input className={'vertical-slider'} type="range"  {...props}/>
    </div>
  )
}

export default VerticalSlider;
