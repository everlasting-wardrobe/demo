import React, {Component} from 'react';
import BackgroundImg from '../imgs/headerBannerBackground.jpg';
import {StyleSheet, css} from 'aphrodite';

const styles=StyleSheet.create({
  rangeSliderTrack:{
    paddingLeft: '25px',
    paddingRight:'25px',
    paddingTop:'25px',
    paddingBottom:'25px',
  },
  rangeSliderHandle:{
    backgroundColor:'green',
    width: '25px',
    height:'25px',
  }
});


export default class RangeSlider extends Component{
  constructor(props){
    super(props);
    const {vertical, value, rangeMin, rangeMax, trackLength, trackWidth, HandleComponent} = this.props;
    this.state = {
      handle : { xPos: `0px`, yPos: '0px'},
      dragging: false,
      vertical: vertical || false,
      track:{width: '500px', height:'400px'},
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

  getValue(position){
    const step = this.state.trackLength / this.state.range;
    const value = ((position % step) / step > 0.5 ? 1 : 0) + Math.floor(position / step);
    return value;
  }

  mousedownHandler(mouseEvent){
    console.log('mousedownHandler called');
    this.setState({dragging:true});
  }

  getPosition(mouseEvent){
    let position;
    if(this.state.vertical){
      position = Math.max(Math.min(mouseEvent.clientY - this.track.getBoundingClientRect().y - this.state.padding,
                            parseInt(this.state.trackLength)), 0);
    }else{
      position = Math.max(Math.min(mouseEvent.clientX - this.track.getBoundingClientRect().x - this.state.padding,
                            parseInt(this.state.trackLength)), 0);
    }
    return position;
  }

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

  mouseupHandler(mouseEvent){
    console.log('mouseupHandler called');
    this.setState({dragging: false});
  }

  mouseleaveHandler(mouseEvent){
    this.setState({dragging: false});
  }

  mouseClickHandler(mouseEvent){
    const position = this.getPosition(mouseEvent);
    const value = this.getValue(position);
    if(this.state.vertical){
      const yPos = value * (this.state.trackLength / this.state.range) + 'px';
      console.log(yPos);
      this.setState({handle: {xPos:'0px', yPos: yPos}});
    }else{
      const xPos = value * (this.state.trackLength / this.state.range) + 'px';
      console.log(xPos);
      this.setState({handle: {xPos: xPos, yPos:'0px'}});
    }
    this.setState({value});
  }

  getTrackWidth(){
    return (this.state.vertical ? this.state.trackWidth: this.state.trackLength) + 2 * this.state.padding;
  }

  getTrackHeight(){
    return (this.state.vertical? this.state.trackLength: this.state.trackWidth) + 2 * this.state.padding;
  }

  constructHandle(){
    if(this.state.HandleComponent === undefined){
      return(
        <div style={{position: 'relative', left:this.state.handle.xPos,
          top:this.state.handle.yPos}}
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
        current value: {this.state.value}
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
