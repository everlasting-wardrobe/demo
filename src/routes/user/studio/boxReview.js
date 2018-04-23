import React, {Component} from 'react';
import axios from 'axios';
import {Media, Button} from 'react-bootstrap';

export default class BoxReview extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
      onPreviousClick : props.onPreviousClick,
      onClothClick: props.onClothClick,
      onNextClick: props.onNextClick,
    }
  }

  componentWillReceiveProps({items}){
    this.setState({items});
  }

  renderItems(items){
    return (
      items.map(item => {
        const onClick = () => {
          this.state.onClothClick(item);
        }
        return (
          <Media key={item.discription}
            onClick={onClick}>
            <Media.Left>
              <img width={64} height={64} src={item.clothImgUrl} alt="Item Image Review" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Item</Media.Heading>
              <p>
                {item.discription}
              </p>
            </Media.Body>
          </Media>
        )
      })
    )
  }

  render(){
    return(
      <div>
        {this.renderItems(this.state.items)}
        <Button onClick={this.state.onPreviousClick}>Previous</Button>
        <Button onClick={this.state.onNextClick}>Next</Button>
      </div>
    )
  }
}
