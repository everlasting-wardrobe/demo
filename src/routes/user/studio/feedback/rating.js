import React, {Component} from 'react';
import './rating.css';
import FitFeedback from './Fit_Feedback.png';
import StyleFeedback from './Style_Feedback.png';
import styled from 'styled-components';

const Afam = styled.img`
  height: 6.5vw;
  width: 96%;
  position: relative;
`

const RatingAFAM = (props)=>{
  const score = props.score;
  let RatingScore = (score*100/10-10)*0.95 + 8;
  let imgSrc = props.imgSrc;
  console.log(RatingScore);
  return(
    <div className={"Rating-bar"} style={{textAlign: 'center'}}>
      <Afam src ={imgSrc}/>
      <div
        style={{
          height: '6.5vw',
          width: '48%',
          position: 'absolute',
          top: 0,
          transform: 'translate(2%)',
        }}
      >
        <div
        className={'Rating-score'}
        style={{
          zIndex:5,
          position: 'absolute',
          width: '8.6%',
          height:'3.6vw',
          backgroundColor: '#96D6D7',
          opacity: 0.5,
          top: '0.95vw',
          left: `${RatingScore}%`,
        }}
        >
        </div>
      </div>
    </div>
  )
}

export default class Rating extends Component{
  constructor(props){
    super(props);
    this.state = {
      Barcode: this.props.Barcode,
      FitRating : this.props.FitRating || 0,
      StyleRating : this.props.StyleRating || 0,
      onUpdateClick: this.props.onUpdateClick,
      rating: "flex",
      comment: "none",
    }
  }
  SwitchToComment = ()=>{
    this.setState({rating : "none"});
    this.setState({comment : "block"});
  }
  switchToRating =()=>{
    this.setState({rating : "flex"});
    this.setState({comment : "none"});
  }


  constructChange(sliderName){
    return (event)=>{
      this.setState({[sliderName]: event.target.value});
    }
  }

  componentWillReceiveProps({Barcode, FitRating, StyleRating}){
    this.setState({
      Barcode, FitRating, StyleRating
    })
  }

  render(){
    return (
      <div>
      <div className={"commentSection"} style={{display: `${this.state.comment}`}}>
        <textarea placeholder={"leave any comment you want"} />
        <button className={"switchToRating"} onClick={this.switchToRating}>Switch to Rating</button>
        <button id={"SaveComment"}>SAVE COMMENT</button>
      </div>
        <div key={this.state.Barcode} className={`item-feedback-slider-container`} style={{display: `${this.state.rating}`}} >
            <div className={"Ratingbar-wrapper"}>
              <RatingAFAM score={this.state.StyleRating} imgSrc={FitFeedback}/>
              <RatingAFAM score={this.state.FitRating} imgSrc={StyleFeedback}/>
            </div>
              <div className="item-feedback-slider-wrapper">
              <div className="item-feedback-slider-title">{"Style Rating"}</div>
                <input type="range" min="1" max="9" step="1"
                value = {`${this.state.StyleRating}`}
                className="feedback-slider style-feedback-slider" onChange={this.constructChange('StyleRating').bind(this)} style={{fontSize:"0.8em"}}/>
              </div>
              <div className="item-feedback-slider-wrapper">
              <div className="item-feedback-slider-title">{"Fit Rating"}</div>
                <input type="range" min="1" max="9" step="1"
                value = {`${this.state.FitRating}`}
                className="feedback-slider fit-feedback-slider" onChange={this.constructChange('FitRating').bind(this)} style={{fontSize:"0.8em"}}/>
              </div>
              <button id="switch-comment" onClick={this.SwitchToComment}>Switch To Comment</button>
              <button id="update-rating" onClick={()=>{this.state.onUpdateClick(this.state.FitRating, this.state.StyleRating)}}>Update Your Rating</button>
        </div>
      </div>
    )
  }
}
