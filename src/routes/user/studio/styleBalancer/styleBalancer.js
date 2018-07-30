import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styleBalancer.css';
import './sliderBackground.css';
import '../util/verticalSlider.css';


class StyleBalancer extends Component{
  constructor(props){
    super(props);
    const {sliderArray, range, onChange, ...sliders} = this.props;
    this.state = {
      sliderArray : sliderArray,
      range : range,
      onChange : onChange,
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
        <div className={'style-balancer-slider-suit'}>
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
      <div className={'style-balancer'}>
        <div className={'style-balancer-slider-container'}>
          {this.renderSlider(this.state.sliderArray)}
        </div>
      </div>
    )
  }

}

StyleBalancer.defaultProps={
  sliderArray : [],
  range : 5,
  slider : {},
}


StyleBalancer.propTypes = {
  sliderArray : PropTypes.arrayOf(PropTypes.object),
  range : PropTypes.number,
}




export default StyleBalancer;
