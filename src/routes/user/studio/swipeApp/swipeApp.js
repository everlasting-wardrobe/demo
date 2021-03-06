import React from 'react';
import SwipeAppImg from './swipeAppComingSoon.png'
import './swipeApp.css';
import {withPanelBackground} from '../util/util';

const SwipeApp = () => {
  return (
    <div>
      <p
        className = {"swipeApp-title"}
      >
        {"-OUTFIT PICKER-"}
      </p>
      <img src = {SwipeAppImg}
        style={{
          width: '20vw',
          height: '25vw',
          marginLeft: '1vw',
          padding: '0 0 1vw 0'
        }}
        alt={"Swipe App Comming Soon!"}
      />
      <div
        style = {{
          height: '2vw',
        }}
      />
    </div>
  )
}

export default withPanelBackground(SwipeApp);
