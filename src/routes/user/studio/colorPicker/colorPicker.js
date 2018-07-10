import React, {Component} from 'react';
import './colorPicker.css';
import './rgbaSlider.css';

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

  renderRbgaSlider = () => {
    let states = ['r', 'g', 'b', 'a'];
    return states.map((stateName, i)=> {
      return (
        <div>
          <input className={'rgba-slider'} type="range" min="0" max="255" step="1" value={this.state.r} onChange={this.constructOnRangeChange('r')}/>
        </div>
      )
    })
  }

  render(){
    return (
      <div className={'color-picker'}>
        <div className={'color-picker-panel'}
          style={{backgroundColor:`rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`}} />
        <div className={'color-picker-rgba-slider-container'}>
          <div className={'rgba-slider-wrapper'}>
            <input className={'rgba-slider'} type="range" min="0" max="255" step="1"
              value={this.state.r} onChange={this.constructOnRangeChange('r')}/>
          </div>
          <div className={'rgba-slider-wrapper'}>
            <input className={'rgba-slider'} type="range" min="0" max="255" step="1"
              value={this.state.g} onChange={this.constructOnRangeChange('g')}/>
          </div>
          <div className={'rgba-slider-wrapper'}>
            <input className={'rgba-slider'} type="range" min="0" max="255" step="1"
              value={this.state.b} onChange={this.constructOnRangeChange('b')}/>
          </div>
          <div className={'rgba-slider-wrapper'}>
            <input className={'rgba-slider'} type="range" min="0" max="1" step="0.01"
              value={this.state.a} onChange={this.constructOnRangeChange('a')}/>
          </div>
        </div>
      </div>
    )
  }

}
