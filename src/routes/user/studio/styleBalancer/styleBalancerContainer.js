import React, {Component} from 'react';
import StyleBalancer from './styleBalancer';
import {connect} from 'react-redux';

class StyleBalancerContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      sliderArray : this.props.sliderArray,
      size: this.props.size,
      style: this.props.style,
      genre: this.props.genre,
      range: this.props.range,
      width: this.props.width,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event, sliderName)=>{
    this.setState({[sliderName] : event.target.value});
  }

  render(){
    return (
      <StyleBalancer
        sliderArray={this.state.sliderArray}
        size={this.state.size}
        style={this.state.style}
        genre={this.state.genre}
        width={this.state.width}
        onChange = {this.onChange}
      />
    )
  }
}

StyleBalancerContainer.defaultProps = {
  sliderArray: [
    {name: 'size', upperBound:'LOOSE', lowerBound:'FITTED'},
    {name: 'style', upperBound:'FANCY', lowerBound:'CASUAL'},
    {name: 'genre', upperBound:'TOPS', lowerBound:'BOTTOMS'}
  ],
  size  : 1,
  style : 1,
  genre : 1,
  range : 5,
  width : 1,
}

const mapStateToProps = (state, ownProps) => {
    return {
      ...state.styleBalancerReducer,
      ...ownProps
    }
}

export default connect(mapStateToProps)(StyleBalancerContainer);
