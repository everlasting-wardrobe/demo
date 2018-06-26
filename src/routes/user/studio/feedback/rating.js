import React, {Component} from 'react';
import './rating.css';

const Rating = ({FitRating, StyleRating})=> {
  console.log(FitRating);
  console.log(StyleRating);
  return (
    <div className={`item-feedback-slider-container`}>
      <div className="item-feedback-slider-wrapper">
        <input type="range" min="1" max="9" step="1"
        value = {`${StyleRating}`}
        className="feedback-slider style-feedback-slider" style={{fontSize:"0.8em"}}/>
      </div>
      <div className="item-feedback-slider-wrapper">
        <input type="range" min="1" max="9" step="1"
        value = {`${FitRating}`}
        className="feedback-slider fit-feedback-slider" style={{fontSize:"0.8em"}}/>
        <div className="feedback-notation">
          <div>{"WAY TO SMALL!"}</div>
          <div>{"A LITTEL TOO SMALL"}</div>
          <div>{"PERFECT"}</div>
          <div>{"A LITTLE TOO BIG"}</div>
          <div>{"WAY TOO BIG"}</div>
        </div>
      </div>
    </div>
  )
}

export default Rating;
