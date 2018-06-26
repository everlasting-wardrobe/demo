import React, {Component} from 'react';
import boxReviewDataGenerator from './boxReviewTestData';
import BoxReview from './boxReview';
import Booth from './booth';
import './feedback.css';
import './feedbackSlider.css';
import BoxReviewBackground from './boxReviewBackground.png'
import Rating from './rating';
import PropTypes from 'prop-types';

export default class Feedback extends Component{
  constructor(props){
    super(props);
    this.state = {
      month: 0,
      boxReviewData : [],
      displayingItem: null,
      currentKey : null,
    }
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onClothClick = this.onClothClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onPreviousClick = () => {
    // still need to figure out the boundary
    let month = this.state.month;
    if (month != 1){
      this.setState({month: month - 1});
    }else {
      month = this.state.month;
      alert("this is the first order");
    }
  }

  onNextClick = () => {
    let month = this.state.month;
    if (month != 12){
      this.setState({month: month + 1});
    }else {
      month = this.state.month;
      alert("this is the last month");
    }
  }

  onClothClick = (displayingItem) => {
    // console.log(displayingItem);
    let currentKey = displayingItem.key;
    this.setState({
      displayingItem,
      currentKey,
    });
    // console.log(currentKey);
  }

  onUpdateClick = (fitRating, styleRating) => {
    this.state.displayingItem.fitRating = fitRating;
    this.state.displayingItem.styleRating = styleRating;
    // console.log(this.state.boxReviewData);
  }

  onSliderChange = (action, value)=>{
    // this.setState({this.state.displayingItem: })
  }

  componentDidMount(){
    const boxReviewData = boxReviewDataGenerator();
    this.setState({
      boxReviewData,
      displayingItem: boxReviewData[boxReviewData.length - 1].items[7],
      currentKey : boxReviewData[boxReviewData.length - 1].items[7].key,
      month: boxReviewData.length,
    });
    console.log(this.state.boxReviewData);
    console.log(this.state.displayingItem);
  }

  render(){
    // console.log(this.state.width);
    return(
      <div className="feedback-wrapper">
        <div className='feedback'>
          <div className="box-review-wrapper">
            {
              this.state.boxReviewData.length > 0 &&
              <BoxReview items={this.state.boxReviewData[this.state.month - 1].items}
                currentKey={this.state.currentKey}
                onPreviousClick={this.onPreviousClick}
                onNextClick={this.onNextClick}
                onClothClick={this.onClothClick}/>
            }
          </div>
          <div className="item-display-rating">
            {
              this.state.displayingItem &&
              <div className='item-display-wrapper'>
                <Booth item={this.state.displayingItem}/>
              </div>
            }
            {
              this.state.displayingItem &&
              <div className="feedback-rating">
                <Rating FitRating={this.state.displayingItem.FitRating} StyleRating = {this.state.displayingItem.StyleRating}/>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
