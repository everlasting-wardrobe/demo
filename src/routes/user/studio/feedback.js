import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import boxReviewDataGenerator from './boxReviewTestData';
import BoxReview from './boxReview';
import Booth from './booth';
import Rating from './rating';
import ColorPicker from './colorPicker';

export default class Feedback extends Component{
  constructor(props){
    super(props);
    const boxReviewData = boxReviewDataGenerator();
    this.state = {
      month: 12,
      boxReviewData : boxReviewData,
      displayingItem: boxReviewData[11][7],
    }
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onClothClick = this.onClothClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  onPreviousClick = () => {
    let month = this.state.month;
    this.setState({month: month - 1});
  }

  onClothClick = (displayingItem) => {
    // console.log(displayingItem);
    this.setState({
      displayingItem,
    })
  }

  onUpdateClick = (fitRating, styleRating) => {
    this.state.displayingItem.fitRating = fitRating;
    this.state.displayingItem.styleRating = styleRating;
    console.log(this.state.boxReviewData);
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col lg={3} md={3} sm={3} xs={12}>
            <BoxReview items={this.state.boxReviewData[this.state.month - 1]}
              onPreviousClick={this.onPreviousClick}
              onClothClick={this.onClothClick}/>
          </Col>
          <Col lg={8} md={8} sm={8} xs={12}>
            <Booth item={this.state.displayingItem}/>
            <Rating item={this.state.displayingItem}
              onUpdateClick = {this.onUpdateClick}/>
          </Col>
        </Row>
        <Row>
          <ColorPicker />;
        </Row>
      </Grid>
    )
  }
}
