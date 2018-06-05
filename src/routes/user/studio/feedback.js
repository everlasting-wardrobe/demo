import React, {Component} from 'react';
import boxReviewDataGenerator from './boxReviewTestData';
import BoxReview from './boxReview';
import Booth from './booth';
// import Rating from './rating';
import './feedback.css';

export default class Feedback extends Component{
  constructor(props){
    super(props);
    const boxReviewData = boxReviewDataGenerator();
    this.state = {
      month: 12,
      boxReviewData : boxReviewData,
      displayingItem: boxReviewData[11][7],
      currentKey : boxReviewData[11][7].key,
      width: window.innerWidth,
    }
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onClothClick = this.onClothClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions = function() {
    this.setState({width: window.innerWidth});
    console.log(this.state.width);
  }

  componentDidMount = function() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount = function() {
    window.removeEventListener("resize", this.updateDimensions);
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
    // this.setState({
    //   displayingItem.fitRating : fitRating
    // });
    this.state.displayingItem.styleRating = styleRating;
    console.log(this.state.boxReviewData);
  }


  //     <Col lg={6} md={6} sm={6} xs={12} lgOffset={1}>
  //       <Booth item={this.state.displayingItem}/>
  //       {<Rating item={this.state.displayingItem}
  //         onUpdateClick = {this.onUpdateClick}/>}
  //     </Col>

  render(){
    console.log(this.state.width);
    return(
      <div>
          {
            this.state.width < 780 ? (
            <div id='feedback'>
              <div id='item-display-wrapper'>
                <Booth item={this.state.displayingItem}/>
              </div>
              <div id="box-review-wrapper">
                <BoxReview items={this.state.boxReviewData[this.state.month - 1]}
                  currentKey={this.state.currentKey}
                  onPreviousClick={this.onPreviousClick}
                  onNextClick={this.onNextClick}
                  onClothClick={this.onClothClick}/>
              </div>
            </div>
            ) : (
            <div id='feedback'>
              <div id="box-review-wrapper">
                <BoxReview items={this.state.boxReviewData[this.state.month - 1]}
                  currentKey={this.state.currentKey}
                  onPreviousClick={this.onPreviousClick}
                  onNextClick={this.onNextClick}
                  onClothClick={this.onClothClick}/>
              </div>
              <div id='item-display-wrapper'>
                <Booth item={this.state.displayingItem}/>
              </div>
            </div>
            )
          }
      </div>
    )
  }
}
