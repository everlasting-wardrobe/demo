import React, {Component} from 'react';
import './booth.css';
import ErrorBoundary from './errorBoundary';
import ReactImageZoom from 'react-image-zoom';
import {LoadedImg} from '../util/util';

export default class Booth extends Component {
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
      // if(this.state.product[photoName] !== null){
        return (
          <img key={photoName} src={this.state.product[photoName]} onClick = {onClick}
            className={`item-image ${this.state.selectImg === photoName ? 'image-select':''}`}
            alt={`Item Image Review for ${photoName}`} />
        )
      // }
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
    const {Color_Combo, Size, Barcode, Item, PatternB} = this.state.product;
    let title = Item.Brand.BrandName + " " + (PatternB ? PatternB.PatternB + " " : "")
                + (PatternB && PatternB.PatternA && PatternB.PatternB !== PatternB.PatternA.PatternA ? PatternB.PatternA.PatternA + " ":"")
                + Item.Genus.Genus;
    return(
      <div id="booth">
        <content id="booth-item-image-review">
        <ErrorBoundary>
          <div id="booth-item-display-image-wrapper">
             <LoadedImg src={this.state.product[this.state.selectImg]} alt="Item Image Review" />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="booth-item-image-container">
            {this.renderItemImages()}
          </div>
        </ErrorBoundary>
        </content>
        <div id="booth-item-info-wrapper">
            <h3 id="booth-SKU-title">{title}</h3>
            <h4 id="booth-SKU-code">{Barcode}</h4>
            <div className={'cloth-info-container'}>
              <span className={'cloth-info'}>{Item.Gender.Gender}</span>
              <span className={'cloth-info'}>{Size.Size}</span>
            </div>
            <div className={'cloth-color'}>
              <div >color:</div>
              <div className='color_1'></div>
              <div className='color_2'></div>
              <div className='color_3'></div>
            </div>
            <div className={'overall-price'}>
              <div>
                <h4 id="booth-item-msrp">MSRP:<span>${Item.Selling_price}</span></h4>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
