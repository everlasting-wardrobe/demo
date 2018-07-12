import React, {Component} from 'react';
import './colorPicker.css';
import './rgbaSlider.css';
import VerticalSlider from './verticalSlider';
import ColorPickerWindow from './ColorPickerWindow.png';

export default class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      r: this.props.r || 255,
      g: this.props.g || 255,
      b: this.props.b || 255,
      a: this.props.a || 1,
    }
  }

  constructOnRangeChange(stateName){
      let onRangeChange = (event) => {
        this.setState({[stateName] : event.target.value});
      }
      onRangeChange = onRangeChange.bind(this);
      return onRangeChange;
  }

  renderRgbaSlider = () => {
    let states = ['r', 'g', 'b', 'a'];
    return states.map((stateName, i) => {
      let min = "0", max = "255", step = "1";
      if(stateName === 'a'){
        max = "1";
        step = "0.01";
      }
      return (
            <VerticalSlider key={stateName} type="range" min={min} max={max} step={step}
              value={this.state[stateName]} onChange={this.constructOnRangeChange(stateName)}/>
      )
    })
  }

  render(){
    return (
      <div className={'color-picker'}>
        <div className={'color-picker-window-wrapper'}>
          <img className={'color-picker-window'} src={ColorPickerWindow}/>
          <div className={'color-picker-panel'}
            style={{backgroundColor:`rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`}} />
        </div>
        <div className={'color-picker-rgba-slider-container'}>
          {this.renderRgbaSlider()}
        </div>
      </div>
    )
  }

}
