import React, {Component} from 'react';
import './rating.css';

export default class Rating extends Component{
  constructor(props){
    super(props);
    this.state = {
      Barcode: this.props.Barcode,
      FitRating : this.props.FitRating || 5,
      StyleRating : this.props.StyleRating || 5,
      onUpdateClick: this.props.onUpdateClick,
    }
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
    console.log(this.state.onUpdateClick);
    return (
      <div key={this.state.Barcode} className={`item-feedback-slider-container`}>
        <div className="item-feedback-slider-wrapper">
          <input type="range" min="1" max="9" step="1"
          value = {`${this.state.StyleRating}`}
          className="feedback-slider style-feedback-slider" onChange={this.constructChange('StyleRating').bind(this)} style={{fontSize:"0.8em"}}/>
        </div>
        <div className="item-feedback-slider-wrapper">
          <input type="range" min="1" max="9" step="1"
          value = {`${this.state.FitRating}`}
          className="feedback-slider fit-feedback-slider" onChange={this.constructChange('FitRating').bind(this)} style={{fontSize:"0.8em"}}/>
          <div className="feedback-notation">
            <div>{"WAY TO SMALL!"}</div>
            <div>{"PERFECT"}</div>
            <div>{"WAY TOO BIG"}</div>
          </div>
        </div>
        <button id="update-rating" onClick={()=>{this.state.onUpdateClick(this.state.FitRating, this.state.StyleRating)}}>Update Your Rating</button>
      </div>
    )
  }
}
