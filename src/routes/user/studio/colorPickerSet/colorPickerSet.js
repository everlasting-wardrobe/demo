import React, {Component} from 'react';
import ColorPicker from './colorPicker';
import './colorPickerSet.css';
import Screw from './Screw.png';


export default class ColorPickerSet extends Component{
  constructor(props){
    super(props);
    this.state={
      color1 : this.props.Color1 || {r:'255', g: '255', b:'255', a:'1'},
      color2 : this.props.Color2 || {r:'255', g: '255', b:'255', a:'1'},
      color3 : this.props.Color3 || {r:'255', g: '255', b:'255', a:'1'},
      color4 : this.props.Color3 || {r:'255', g: '255', b:'255', a:'1'},
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
      <div className={'color-picker-set'}>
        <img src={Screw} className={'screw-top-left'}/>
        <img src={Screw} className={'screw-top-right'}/>
        <img src={Screw} className={'screw-bottom-left'}/>
        <img src={Screw} className={'screw-bottom-right'}/>
        <div className={'color-picker-container'}>
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
