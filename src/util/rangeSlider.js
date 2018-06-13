import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import TrackImg from './sliderTrack2.png';
import ThumbImg from '../imgs/thumb.png';

const styles=StyleSheet.create({
  rangeSliderTrack:{
    paddingLeft: '25px',
    paddingRight:'25px',
    marginTop:'25px',
    marginBottom:'25px',
    backgroundImage: `url(${TrackImg})`,
    backgroundSize: 'cover',
    'z-index': -1,
  },
  rangeSliderHandle:{
    backgroundImage:`url(${ThumbImg})`,
    backgroundSize:'cover',
    'z-index': 1,
  }
});


export default class RangeSlider extends Component{
  constructor(props){
    super(props);
    const {vertical, value, rangeMin, rangeMax, trackLength, trackWidth, HandleComponent} = this.props;
    this.state = {
      handle : { xPos: `0px`, yPos: '0px'},
      handleWidth: trackWidth || '25px',
      dragging: false,
      vertical: vertical || false,
      rangeMin: rangeMin || 1,
      rangeMax: rangeMax || 5,
      range: rangeMax - rangeMin + 1 || 5,
      trackLength: trackLength || 300,
      trackWidth: trackWidth || 25,
      padding: 25,
      value: value || rangeMin || 0,
      HandleComponent : HandleComponent
    };

    this.handle = null;
    this.track = null;


    this.mousedownHandler = this.mousedownHandler.bind(this);
    this.mousemoveHandler = this.mousemoveHandler.bind(this);
    this.mouseupHandler = this.mouseupHandler.bind(this);
    this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
    this.mouseClickHandler = this.mouseClickHandler.bind(this);
  }

  // Get the current value according to the position of handle
  getValue(position){
    const step = (this.state.trackLength - parseInt(this.state.handleWidth), 10)/ (this.state.range - 1);
    const value = ((position % step) / step > 0.5 ? 1 : 0) + Math.floor(position / step);
    return value;
  }

  getStep(){
    return (this.state.trackLength - parseInt(this.state.handleWidth), 10)/ (this.state.range - 1);
  }

  // Create mouse down event handler for handle
  mousedownHandler(mouseEvent){
    console.log('mousedownHandler called');
    this.setState({dragging:true});
  }

  // Get handle's postion according to mouse's move. And the position is
  // prevented from getting out of the bound of track.
  getPosition(mouseEvent){
    let position;
    if(this.state.vertical){
      position = Math.max(Math.min(mouseEvent.clientY - this.track.getBoundingClientRect().y,
                            parseInt(this.state.trackLength, 10) - parseInt(this.state.handleWidth), 10), 0);
    }else{
      position = Math.max(Math.min(mouseEvent.clientX - this.track.getBoundingClientRect().x,
                            parseInt(this.state.trackLength, 10) - parseInt(this.state.handleWidth), 10), 0);
    }
    return position;
  }

  // Create handle for mouse move event and will set the handle's position and
  // handle's value in state.
  mousemoveHandler(mouseEvent){
    console.log('mousemoveHandler called');
    let position = this.getPosition(mouseEvent);
    if(this.state.vertical){
      const yPos = position + 'px';
      console.log(yPos);
      this.setState({handle: {xPos:'0px', yPos: yPos}, dragging: true});
    }else{
      const xPos = position + 'px';
      console.log(xPos);
      this.setState({handle: {xPos: xPos, yPos:'0px'}, dragging: true});
    }
    const value = this.getValue(position);
    this.setState({value : value});
  }

  // Create handler for mouse up event.
  mouseupHandler(mouseEvent){
    console.log('mouseupHandler called');
    this.setState({dragging: false});
  }

  // Create handler for mouse leave event.
  mouseleaveHandler(mouseEvent){
    this.setState({dragging: false});
  }

  // Create handler for user to click on track.
  mouseClickHandler(mouseEvent){
    const position = this.getPosition(mouseEvent);
    const step = this.getStep();
    const value = this.getValue(position);
    if(this.state.vertical){
      const yPos = step * value + 'px';
      console.log(yPos);
      this.setState({handle: {xPos:'0px', yPos: yPos}});
    }else{
      const xPos = step * value + 'px';
      console.log(xPos);
      this.setState({handle: {xPos: xPos, yPos:'0px'}});
    }
    this.setState({value});
  }


  getTrackWidth(){
    return (this.state.vertical ? this.state.trackWidth: this.state.trackLength) + 2 * this.state.padding;
  }

  getTrackHeight(){
    return (this.state.vertical? this.state.trackLength: this.state.trackWidth);
  }

  constructHandle(){
    if(this.state.HandleComponent === undefined){
      return(
        <div style={{position: 'relative', left:this.state.handle.xPos,
          top:this.state.handle.yPos, width: this.state.handleWidth,
          height: this.state.handleWidth}}
          ref={(handle)=>{this.handle = handle}}
          onMouseDown={(mouseEvent)=>{this.mousedownHandler(mouseEvent)}}
          onMouseUp={(mouseEvent)=>{this.mouseupHandler(mouseEvent)}}
          className={css(styles.rangeSliderHandle)}>
        </div>
      )
    }else{
      return
    }
  }

  render(){
    return(
      <div>
        current value: {this.state.value + 1}
        <div className={css(styles.rangeSliderTrack)}
          ref={(track)=>{this.track = track}}
          style={{width: this.getTrackWidth(),
                  height: this.getTrackHeight() }}
          onClick={(mouseEvent)=>{this.mouseClickHandler(mouseEvent)}}
          onMouseMove={(mouseEvent)=>{if(this.state.dragging){this.mousemoveHandler(mouseEvent)}}}
          onMouseUp={(mouseEvent)=>{this.mouseupHandler(mouseEvent)}}
          onMouseLeave={(mouseEvent)=>{this.mouseleaveHandler(mouseEvent)}}>
          {this.constructHandle()}
        </div>
      </div>
    )
  }
}
