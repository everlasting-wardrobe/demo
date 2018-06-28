import React, {Component} from 'react';
// import boxReviewDataGenerator from './boxReviewTestData';
import BoxReview from './boxReview';
import Booth from './booth';
import './feedback.css';
import './feedbackSlider.css';
import Rating from './rating';
import PropTypes from 'prop-types';
import axios from 'axios';
import ErrorBoundary from './errorBoundary';


export default class Feedback extends Component{
  constructor(props){
    super(props);
    this.state = {
      month: 0,
      boxReviewData : this.props.boxReviewData || [],
      displayingItem: null,
      currentKey : null,
    }
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onClothClick = this.onClothClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
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
    if (month < this.state.boxReviewData.length){
      this.setState({month: month + 1});
    }else {
      month = this.state.month;
      alert("this is the last month");
    }
  }

  onClothClick = (displayingItem) => {
    let currentKey = displayingItem.Barcode;
    this.setState({
      displayingItem,
      currentKey,
    });
  }

  onUpdateClick = (FitRating, StyleRating) => {
    this.state.displayingItem.BoxProducts.FitRating = FitRating;
    this.state.displayingItem.BoxProducts.StyleRating = StyleRating;
    axios.post('/user', {
      BoxID: this.state.displayingItem.BoxProducts.BoxID,
      ProductID: this.state.displayingItem.BoxProducts.ProductID,
      FitRating: FitRating,
      StyleRating: StyleRating,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount(){
    // const boxReviewData = boxReviewDataGenerator();
    if(this.state.boxReviewData.length > 0){
      this.setState({
        displayingItem: this.state.boxReviewData[this.state.boxReviewData.length - 1].Products[7],
        currentKey : this.state.boxReviewData[this.state.boxReviewData.length - 1].Products[7].Barcode,
        month: this.state.boxReviewData.length,
      });
    }
  }

  render(){
    // console.log(this.state.width);
    return(
      <div className="feedback-wrapper">
        <div className='feedback'>
          <div className="box-review-wrapper">
            <ErrorBoundary>
            {
              this.state.month != 0 &&
              <BoxReview items={this.state.boxReviewData[this.state.month - 1].Products}
                currentKey={this.state.currentKey}
                onPreviousClick={this.onPreviousClick}
                onNextClick={this.onNextClick}
                onClothClick={this.onClothClick}/>
            }
            </ErrorBoundary>
          </div>
          <div className="item-display-rating">
            <ErrorBoundary>
            {
              this.state.displayingItem &&
              <div className='item-display-wrapper'>
                <Booth item={this.state.displayingItem}/>
              </div>
            }
            </ErrorBoundary>
            <ErrorBoundary>
            {
              this.state.displayingItem &&
              <div className="feedback-rating">
                <Rating Barcode={this.state.displayingItem.Barcode}
                  FitRating={this.state.displayingItem.BoxProducts.FitRating}
                  StyleRating = {this.state.displayingItem.BoxProducts.StyleRating}
                  onUpdateClick={this.onUpdateClick}/>
              </div>
            }
            </ErrorBoundary>
          </div>
        </div>
      </div>
    )
  }
}
