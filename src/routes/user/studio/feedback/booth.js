import React, {Component} from 'react';
import './booth.css';

class Booth extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: this.props.item,
      selectImg: 'FrontPhoto',
      // Think about what if there is no pics exist.
      photoList: ['FrontPhoto', 'BackPhoto', 'LeftPhoto', 'RightPhoto'],
    }
    this.handleImageOnClick = this.handleImageOnClick.bind(this);
  }

  handleImageOnClick(photoName){
    this.setState({selectImg: photoName});
  }

  // Check if clothImgUrls exist and render it
  renderItemImages = () => {
    return this.state.photoList.map((photoName) => {
      const onClick = ()=> {
        this.handleImageOnClick(photoName);
      }
      if(this.state.product[photoName] !== null){
        return (
          <img key={photoName} src={this.state.product[photoName]} onClick = {onClick}
            className={`item-image ${this.state.selectImg === photoName ? 'image-select':''}`}
            alt={`Item Image Review for ${photoName}`} />
        )
      }
    })
  }

  componentWillReceiveProps({item}){
    this.setState({product : item});
  }

  render(){
    if(!this.state.product){
      return(
        <div id="booth">
        </div>
      )
    }
    const {title, gender, Color_Combo, Size, msrp, Barcode, Item} = this.state.product;
    return(
      <div id="booth">
        <content id="booth-item-image-review">
          <div id="booth-item-display-image-wrapper">
            <img src={this.state.product[this.state.selectImg]} alt="Item Image Review" />
          </div>
          <div className="booth-item-image-container">
            {this.renderItemImages()}
          </div>
        </content>
        <div id="booth-item-info-wrapper">
            <h3 id="booth-SKU-title">{title}</h3>
            <h4 id="booth-SKU-code">{Barcode}</h4>
            <div className={'cloth-info-container'}>
              <span className={'cloth-info'}>{gender}</span>
              <span className={'cloth-info'}>{Size.Size}</span>
            </div>
            <div className={'overall-price'}>
              <div>
                <h4 id="booth-item-msrp">MSRP:<span>${msrp}</span></h4>
              </div>
              <div>
                <h4 id="booth-item-price">THE PRICE YOU PAY:<span>${Item.Selling_price}</span></h4>
              </div>
            </div>
            <div>
              <button id='pay-for-cloth-button'>BUY NOW FOR ${Item.Selling_price}</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Booth;
