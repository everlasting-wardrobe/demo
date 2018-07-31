import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styleBalancer.css';
import './sliderBackground.css';
import '../util/verticalSlider.css';
import {withScrewBackground} from '../util/util';
import {InfoButtonInsertion} from '../util/util';


class StyleBalancer extends Component{
  constructor(props){
    super(props);
    const {sliderArray, range, onChange, width, ...sliders} = this.props;
    this.state = {
      sliderArray : sliderArray,
      range       : range,
      onChange    : onChange,
      width       : width,
      ...sliders
    }
  }

  componentWillReceiveProps({...props}){
    this.setState({...props});
  }

  // render sliders based on slider names
  renderSlider = (sliderArray)=>{
    return sliderArray.map((slider)=>{
      return (
        <div className={'style-balancer-slider-suit'} key={slider.name}>
          <p>{slider.upperBound}</p>
          <div className = {'vertical-slider-wrapper style-balancer-slider-wrapper'} key={slider.name}>
            <input className={`vertical-slider style-balancer-slider`} type="range"
            min={1} max={this.state.range} step={1} value={this.state[slider.name]}
            onChange={(event)=>{this.state.onChange(event, slider.name)}}/>
          </div>
          <p>{slider.lowerBound}</p>
        </div>
      )
    })
  }

  render(){
    return(
      <div className={'style-balancer'} style={{width:`${this.state.width * 100}vw `}}>
        <div className={'style-balancer-slider-container'}
        style={{fontSize:`${this.state.width * 5.5}vw `}}>
          {this.renderSlider(this.state.sliderArray)}
        </div>
      </div>
    )
  }

}

StyleBalancer.defaultProps={
  sliderArray : [],
  range       : 5,
  width       : 1,
  slider      : {},
}


StyleBalancer.propTypes = {
  sliderArray : PropTypes.arrayOf(PropTypes.object),
  range : PropTypes.number,
  width : PropTypes.number,
}


// Add Screw Background
const StyleBalancerWithBackground = withScrewBackground(StyleBalancer);


// Build a component with title
// InfoButtonInsertion component is used to add infomation button on inner component

class StyleBalancerPanel extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <InfoButtonInsertion type={'left'} top={'25%'}>
        <div className={'style-balancer-panel'} style={{width:`${this.props.width * 100} vw`}}>
          <div className={'style-balancer-title'}>
            <h3>{"-STYLE BALANCE-"}</h3>
          </div>
          <StyleBalancerWithBackground {...this.props} />
        </div>
      </InfoButtonInsertion>
    )
  }

}

export default StyleBalancerPanel;
