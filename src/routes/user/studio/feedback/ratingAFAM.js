import React, {Component} from 'react';
import styled from 'styled-components';
import FitFeedback from './Fit_Feedback.png';

const Afam = styled.img`
  height: 5vw;
  width: 84%;
  position: relative;
`



const RatingAFAM = (props)=>{
  const score = props.score;
  let RatingScore = score;
  let imgSrc = props.imgSrc;
  return(
    <div className={"Rating-bar"} style={{textAlign: 'center'}}>
      <Afam src ={imgSrc}/>
      <div
      className={'Rating-score'}
      style={{
        zIndex:3,
        position: 'absolute',
        top: 0,
        left: `${RatingScore}px`,
      }}
      >
      </div>
    </div>
  )
}

export default RatingAFAM;
