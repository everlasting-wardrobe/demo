import React, {Component} from 'react';
import './rating.css';

const Rating = ()=> {
  return (
    <div className={`item-feedback-slider-container`}>
      <div className="item-feedback-slider-wrapper">
        <input type="range" min="1" max="9" step="1"
        className="feedback-slider style-feedback-slider" style={{fontSize:"0.6em"}}/>
      </div>
      <div className="item-feedback-slider-wrapper">
        <input type="range" min="1" max="9" step="1"
        className="feedback-slider fit-feedback-slider" style={{fontSize:"0.6em"}}/>
        <div className="feedback-notation">
          <div>{"WAY TO SMALL!"}</div>

          <div>{"PERFECT"}</div>

          <div>{"WAY TOO BIG"}</div>
        </div>
      </div>
    </div>
  )
}

export default Rating;
