import React, {Component} from 'react';
import StyleBalancer from './styleBalancer';
import {connect} from 'react-redux';
import {updataMixingBoardData} from '../../../routerAction';


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
    if(this.props.saveToRedux){
      this.props.saveToRedux({
        ...this.state,
        [sliderName]: event.target.value
      })
    }
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
    const sbData = state.mixingBoardReducer;
    return {
      size: sbData.sb1,
      style: sbData.sb2,
      genre: sbData.sb3,
      ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
  const mapPropsToState = (props) => {
    return {
      sb1: props.size,
      sb2: props.style,
      sb3: props.genre
    }
  };
  return {
    saveToRedux: (data) => {
      const action = updataMixingBoardData(mapPropsToState(data));
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleBalancerContainer);
