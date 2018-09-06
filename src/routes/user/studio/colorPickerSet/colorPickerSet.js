import React, {Component} from 'react';
import ColorPicker from './colorPicker';
import './colorPickerSet.css';
import Screw from './Screw.png';
import {connect} from 'react-redux';
import {propsFilter} from '../util/util';
import {updataMixingBoardData} from '../../../routerAction';


const targetProps = ['color1', 'color2', 'color3', 'color4'];

class ColorPickerSet extends Component{
  constructor(props){
    super(props);
    this.state={
      color1 : this.props.color1 || {r:'135', g: '255', b:'255', a:'1'},
      color2 : this.props.color2 || {r:'255', g: '255', b:'255', a:'1'},
      color3 : this.props.color3 || {r:'255', g: '255', b:'255', a:'1'},
      color4 : this.props.color4 || {r:'255', g: '255', b:'255', a:'1'},
      width : this.props.width || 1,
    }
  }


  componentWillReceiveProps(props){
    this.setState(propsFilter(targetProps, props));
  }

  constructOnSliderRangeChange = (colorNum) => {
    let onSliderRangeChange = (baseColor, value) => {
      this.setState((prevState) => {
        const curColor = {...prevState[colorNum]};
        curColor[baseColor] = value;
        if(this.props.saveToRedux){
          this.props.saveToRedux({[colorNum]: curColor});
        }
        return {[colorNum] : curColor};
      })
      // this.state[colorNum][baseColor] = event.target.value;
    }
    onSliderRangeChange = onSliderRangeChange.bind(this);
    return onSliderRangeChange;
  }

  renderColorPickers = () => {
    return (
      targetProps.map((prop) => (
        <div
          key={prop}
          className={"color-picker-wrapper"}
        >
          <ColorPicker
            {...this.state[prop]}
            onSliderRangeChange = {this.constructOnSliderRangeChange(prop)}
          />
        </div>
      ))
    )
  }

  render(){
    return(
      <div
        className={'color-picker-set'}
        style={{width: `${this.state.width * 100}vw`}}
      >
        <h3
          className={'color-picker-set-title'}
          style={{fontSize: `${this.state.width * 6}vw`}}
        >
          {"-COLOR PICKER-"}
        </h3>
        <div
          className={'color-picker-set-info-left'}
          style={{fontSize: `${this.state.width * 1.2}vw`}}
        >
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
        <div
          className={"color-picker-set-info-right"}
          style={{fontSize: `${this.state.width * 1.2}vw`}}
        >
          <p>
            {`CREATE AND EDIT YOUR FAVORITE COLORS `}
          </p>
          <p>
              {`YOU CAN MAKE CHANGES ANYTIME`}
          </p>
        </div>
        <div
          className={'color-picker-container'}
          style={{fontSize: `${this.state.width * 1.6}vw`}}
        >
          {this.renderColorPickers()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const mixingBoardData = state.mixingBoardReducer;
  return {
    ...propsFilter(targetProps, mixingBoardData),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveToRedux : (data) => {
      const action = updataMixingBoardData(data);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerSet);
