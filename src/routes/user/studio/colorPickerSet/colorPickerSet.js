import React, {Component} from 'react';
import ColorPicker from './colorPicker';
import './colorPickerSet.css';
import Screw from './Screw.png';
import {connect} from 'react-redux';

class ColorPickerSet extends Component{
  constructor(props){
    super(props);
    this.state={
      color1 : this.props.Color1 || {r:'135', g: '255', b:'255', a:'1'},
      color2 : this.props.Color2 || {r:'255', g: '255', b:'255', a:'1'},
      color3 : this.props.Color3 || {r:'255', g: '255', b:'255', a:'1'},
      color4 : this.props.Color4 || {r:'255', g: '255', b:'255', a:'1'},
      width : this.props.width || 1,
    }
  }

  constructOnSliderRangeChange = (colorNum, baseColor) => {
    let onSliderRangeChange = (event) => {
      this.state[colorNum][baseColor] = event.target.value;
    }
    onSliderRangeChange = onSliderRangeChange.bind(this);
    return onSliderRangeChange;
  }

  render(){
    return(
      <div className={'color-picker-set'} style={{width: `${this.state.width * 100}vw`}}>
        <h3 className={'color-picker-set-title'} style={{fontSize: `${this.state.width * 6}vw`}}>{"-COLOR PICKER-"}</h3>
        <div className={'color-picker-set-info-left'} style={{fontSize: `${this.state.width * 1.2}vw`}}>
          <p>
            {`R RED `}
          </p>
          <p>
            {` G GREEN `}
          </p>
          <p>
            {` B BLUE `}
          </p>
          <p>
            {` X SATURATION `}
          </p>
        </div>
        <div className={"color-picker-set-info-right"} style={{fontSize: `${this.state.width * 1.2}vw`}}>
          <p>
            {`CREATE AND EDIT YOUR FAVORITE COLORS `}
          </p>
          <p>
              {`YOU CAN MAKE CHANGES ANYTIME`}
          </p>
        </div>
        <div className={'color-picker-container'} style={{fontSize: `${this.state.width * 1.6}vw`}}>
          <div className={"color-picker-wrapper"}>
            <ColorPicker {...this.state.color1} />
          </div>
          <div className={"color-picker-wrapper"}>
            <ColorPicker {...this.state.color2} />
          </div>
          <div className={"color-picker-wrapper"}>
            <ColorPicker {...this.state.color3} />
          </div>
          <div className={"color-picker-wrapper"}>
            <ColorPicker {...this.state.color4} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const colorPickerData = state.colorPickerReducer.colorSetData;
  return {
    Color1: colorPickerData[0],
    Color2: colorPickerData[1],
    Color3: colorPickerData[2],
    Color4: colorPickerData[3],
    ...ownProps
  }
}

export default connect(mapStateToProps)(ColorPickerSet);
