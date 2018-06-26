import React, {Component} from 'react';
import './boxReview.css';
import PropTypes from 'prop-types';

export default class BoxReview extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
      onPreviousClick : props.onPreviousClick,
      onNextClick: props.onNextClick,
      onClothClick: props.onClothClick,
      currentKey: props.currentKey,
    }
  }

  componentWillReceiveProps({items, currentKey}){
    this.setState({items, currentKey});
  }

  // Check if itmes exist, and render it into table if so.
  renderBoxItems(items){
    if(items){
      return (
        <table id='box-review-table'>
          <tbody style={{textAlign: 'center'}}>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Price</th>
            <th>MSRP</th>
          </tr>
          {items.map((item, i) => {
            const onClick = () => {
              this.state.onClothClick(item);
            }
            return(
              <tr key={i} onClick={onClick} className={`box-review-table-row ${this.state.currentKey ===
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
          <button id="box-review-next" onClick={this.state.onNextClick}>Next Month</button>
        </div>
      </div>
    )
  }
}

BoxReview.propTypes = {
  // onPreviousClick: Display Box Items in Previous Month
  onPreviousClick: PropTypes.func,
  // onNextClick: Display Box Items in Next Month
  onNextClick: PropTypes.func,
  // onClothClick: Pass key of Item to be displayed to Parent
  onClothClick: PropTypes.func,
  // currentKey: Key of Item currently displaying, get from parent
  currentKey: PropTypes.string,
  // items: items of box displaying
  items: PropTypes.arrayOf(
    // item object
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      clothImgUrls: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      size: PropTypes.string.isRequired,
      gender: PropTypes.oneOf(['Male','Female']),
      msrp: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      fitRating: PropTypes.number,
      styleRating: PropTypes.number,
      sku: PropTypes.string.isRequired,
      discription: PropTypes.string,
      detail: PropTypes.string,
    }).isRequired,
  ),
}
