import React, {Component} from 'react';
import axios from 'axios';
import {Media, Button} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';
import './boxReview.css';

export default class BoxReview extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
      onPreviousClick : props.onPreviousClick,
      onClothClick: props.onClothClick,
      currentKey: props.currentKey,
    }
  }

  componentWillReceiveProps({items, currentKey}){
    this.setState({items, currentKey});
  }

  renderBoxItems(items){
    console.log(items);
    console.log(this.state.currentKey);
    return (
      <table id='box-review-table'>
        <tbody style={{textAlign: 'center'}}>
        <tr>
          <th>Item</th>
          <th>Size</th>
          <th>Price</th>
          <th>MSRP</th>
        </tr>
        {items.map(item => {
          const onClick = () => {
            this.state.onClothClick(item);
          }
          return(
            <tr onClick={onClick} className={`box-review-table-row ${this.state.currentKey ===
              item.key ? 'item-select': ''}`}>
              <td>{item.title}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
              <td>{item.msrp}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

  render(){
    return(
      <div>
        <div>
          {this.renderBoxItems(this.state.items)}
        </div>
        <p className={`box-review-tips`}>{`Click Item for More Information`}</p>
        <div className="box-review-botton-wrapper">
          <button id="box-review-previous" onClick={this.state.onPreviousClick}>Previous Month</button>
        </div>
      </div>
    )
  }
}
