import React from 'react';
import './colorPickerSlider.css';
import '../util/verticalSlider.css';

const VerticalSlider = (props) => {
  const {style, color} = props;
  const getColor = (color) => {
    if (color === 'r'){
      return "vertical-slider-red-thumb";
    }else if (color === 'g'){
      return "vertical-slider-green-thumb";
    }else if (color === 'b') {
      return "vertical-slider-blue-thumb";
    }else{
      return "vertical-slider-opacity-thumb";
    }
  }
  return (
    <div className = {'vertical-slider-wrapper color-picker-vertical-slider-wrapper'} style={style}>
      <input className={`vertical-slider color-picker-vertical-slider ${getColor(color)}`} type="range"  {...props}/>
    </div>
  )
}

export default VerticalSlider;
