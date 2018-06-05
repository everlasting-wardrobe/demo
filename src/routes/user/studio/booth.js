import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './booth.css';

class Booth extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {clothImgUrl, discription, detail, title, gender, color, size, msrp, price} = this.props.item;
    return(
      <div>
        <div id="booth-item-image-wrapper">
          <img id="booth-item-image" src={clothImgUrl} alt="Item Image Review" />
        </div>
        <div id="booth-item-info-wrapper">
            <h3 id="booth-SKU-title">{title}</h3>
            <h4 id="booth-SKU-code">{detail}</h4>
            <div className={'cloth-info-container'}>
              <span className={'cloth-info'}>{gender}</span>
              <span className={'cloth-info'}>{size}</span>
              <span className={'cloth-info'}>{color}</span>
            </div>
            <div>
              <h4 id="booth-item-msrp">MSRP:${msrp}</h4>
            </div>
            <div>
              <h4 id="booth-item-price">THE PRICE YOU PAY: ${price}</h4>
            </div>
            <div>
              <button id='pay-for-cloth-button'>BUY NOW FOR ${price}</button>
            </div>
        </div>
      </div>
    )
  }
}

// const Booth = ({item}) => {
//   const {clothImgUrl, discription, detail, title, gender, color, size, msrp, price} = item;
//   return(
//     <div>
//       <div id="booth-item-image-wrapper">
//         <img id="booth-item-image" src={clothImgUrl} alt="Item Image Review" />
//       </div>
//       <div id="booth-item-info-wrapper">
//           <h3 id="booth-SKU-title">{title}</h3>
//           <h4 id="booth-SKU-code">{detail}</h4>
//           <div className={'cloth-info-container'}>
//             <span className={'cloth-info'}>{gender}</span>
//             <span className={'cloth-info'}>{size}</span>
//             <span className={'cloth-info'}>{color}</span>
//           </div>
//           <div>
//             <h4 id="booth-item-msrp">MSRP:${msrp}</h4>
//           </div>
//           <div>
//             <h4 id="booth-item-price">THE PRICE YOU PAY: ${price}</h4>
//           </div>
//           <div>
//             <button id='pay-for-cloth-button'>BUY NOW FOR ${price}</button>
//           </div>
//       </div>
//     </div>
//   )
// }

export default Booth;
