import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styleBalancer.css';
import './sliderBackground.css';
import '../util/verticalSlider.css';
import {withScrewBackground} from '../util/util';


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
        style={{fontSize:`${this.state.width * 6.25}vw `}}>
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




export default withScrewBackground(StyleBalancer);
