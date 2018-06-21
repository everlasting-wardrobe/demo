import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './booth.css';

class Booth extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectImgIndex: 0,
      selectImgUrl: this.props.item.clothImgUrls[0],
    }
    this.handleImageOnClick = this.handleImageOnClick.bind(this);
  }

  handleImageOnClick(index, url){
    console.log('handleImageOnClick is called');
    this.setState({selectImgIndex: index, selectImgUrl: url});
    console.log(this.state.selectImgIndex);
  }

  renderItemImages = (clothImgUrls) => {
    console.log(clothImgUrls)
    return clothImgUrls.map((clothImgUrl, index) => {
      const onClick = ()=> {
        this.handleImageOnClick(index, clothImgUrl);
      }
      return (
        <img key={index} src={clothImgUrl} onClick = {onClick}
          className={`item-image ${this.state.selectImgIndex === index ? 'image-select':''}`}
          alt={`Item Image Review for ${index}`} />
      )
    })
  }

  render(){
    const {clothImgUrls, discription, detail, title, gender, color, size, msrp, price} = this.props.item;
    return(
      <div id="booth">
        <content id="booth-item-image-review">
          <div id="booth-item-display-image-wrapper">
            <img src={this.state.selectImgUrl} alt="Item Image Review" />
          </div>
          <div className="booth-item-image-container">
            {this.renderItemImages(clothImgUrls)}
          </div>
        </content>
        <div id="booth-item-info-wrapper">
            <h3 id="booth-SKU-title">{title}</h3>
            <h4 id="booth-SKU-code">{detail}</h4>
            <div className={'cloth-info-container'}>
              <span className={'cloth-info'}>{gender}</span>
              <span className={'cloth-info'}>{size}</span>
              <span className={'cloth-info'}>{color}</span>
            </div>
            <div className={'overall-price'}>
              <div>
                <h4 id="booth-item-msrp">MSRP:<span>${msrp}</span></h4>
              </div>
              <div>
                <h4 id="booth-item-price">THE PRICE YOU PAY:<span>${price}</span></h4>
              </div>
            </div>
            <div>
              <button id='pay-for-cloth-button'>BUY NOW FOR ${price}</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Booth;
