import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import ReactSimpleRange from 'react-simple-range';

const Slider = () => {
  return (
    <ReactSimpleRange
      sliderSize={2}
      eventWrapperPadding={14}
      label
      disableThumb
      min={1}
      max={10}
      value={5}
    >
      <div>
        <svg>
          <path d="M 0 0 L 30 10 L 20 30 z"
        fill="orange" stroke="black" stroke-width="3" />
        </svg>
      </div>
    </ReactSimpleRange>
  )
}

export default Slider;
