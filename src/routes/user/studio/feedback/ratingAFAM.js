import React, {Component} from 'react';
import styled from 'styled-components';
import FitFeedback from './Fit_Feedback.png';

const Afam = styled.img`
  height: 5vw;
  width: 84%;
  position: relative;
`

// class RatingAFAM extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       imgSrc: this.props.imgSrc || "",
//       score: props.score,
//     }
//   }
//   componentWillReceiveProps({score}){
//     this.setState({
//       score
//     })
//   }
//   render(){
//     return(
//       <div className={"Rating-bar"} style={{textAlign: 'center'}}>
//         <Afam src ={this.state.imgSrc}/>
//         <div
//         className={'Rating-score'}
//         style={{
//           zIndex:3,
//           position: 'absolute',
//           top: 0,
//           left: `${this.state.score}px`,
//         }}
//         >
//         </div>
//       </div>
//     )
//   }
// }
// <div className={"Ratingbar-wrapper"}>
//   <RatingAFAM score={this.state.StyleRating} imgSrc={FitFeedback}/>
//   <RatingAFAM score={this.state.FitRating} imgSrc={StyleFeedback}/>
// </div>


const RatingAFAM = (props)=>{
  const score = props.score;
  let RatingScore = score;
  let imgSrc = props.imgSrc;
  console.log(RatingScore);
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
