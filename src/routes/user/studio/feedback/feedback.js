import React, {Component} from 'react';
import boxReviewDataGenerator from './boxReviewTestData';
import BoxReview from './boxReview';
import Booth from './booth';
// import Rating from './rating';
import './feedback.css';
import './feedbackSlider.css';
import BoxReviewBackground from './boxReviewBackground.png'
import Rating from './rating';

export default class Feedback extends Component{
  constructor(props){
    super(props);
    const boxReviewData = boxReviewDataGenerator();
    this.state = {
      month: 12,
      boxReviewData : boxReviewData,
      displayingItem: boxReviewData[11][7],
      currentKey : boxReviewData[11][7].key,
    }
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onClothClick = this.onClothClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }



  fetchBoxData = () => {
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

  onNextClick = () => {
    let month = this.state.month;
    this.setState({month: month + 1});
  }

  onClothClick = (displayingItem) => {
    // console.log(displayingItem);
    let currentKey = displayingItem.key;
    this.setState({
      displayingItem,
      currentKey,
    });
    console.log(currentKey);
  }

  onUpdateClick = (fitRating, styleRating) => {
    this.state.displayingItem.fitRating = fitRating;
    this.state.displayingItem.styleRating = styleRating;
    console.log(this.state.boxReviewData);
  }

  render(){
    console.log(this.state.width);
    return(
      <div className="feedback-wrapper">
        <div className='feedback'>
          <div className="box-review-wrapper">
            <BoxReview items={this.state.boxReviewData[this.state.month - 1]}
              currentKey={this.state.currentKey}
              onPreviousClick={this.onPreviousClick}
              onNextClick={this.onNextClick}
              onClothClick={this.onClothClick}/>
          </div>
          <div className="item-display-rating">
            <div className='item-display-wrapper'>
              <Booth item={this.state.displayingItem}/>
            </div>
            <div className="feedback-rating">
              <Rating />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
