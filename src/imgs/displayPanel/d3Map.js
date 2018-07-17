import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import uStatePaths from './mapOutlineData';
import {colorbrew} from 'd3';

const styles=StyleSheet.create({
  opacity: {
    ':hover':{
      opacity: 0.7
    }
  },

  svg:{
    'transform-origin': '0px 0px 0px',
  }
})

const colors = ['#8da0cb', '#deebf7', '#9ecae1','#3182bd'];
const ranges = [0, 100, 200, 500, 1000];

class Path extends Component{
  constructor(props){
    super(props);
    this.state = {
      stateName : props.stateName,
      impression : props.impression,
      popularity : props.popularity,
      d : props.d,
      onClick : props.onClick,
      color: props.color,
    }
  }

  render(){
    return(
      <path className={css(styles.opacity)}
        d={this.state.d} fill={this.state.color} stroke={'white'}
        onClick={()=>{this.state.onClick(this.state.stateName, this.state.impression, this.state.popularity)}}
        />
    )
  }
}

const D3USMap = (props)=> {
  const colorScale = (value, colors, ranges) => {
    for(let i = 0; i < ranges.length; i++){
      if(value <= ranges[i]){
        return colors[i - 1];
      }
    }
  }

  const handleStatePaths = (uStatePaths) => {
    return(
      uStatePaths.map(stateData => {
        const value = 1000 - Math.random() * 1000;
        const popularity = Math.random() * 500;
        // console.log(value);
        // console.log(colorScale(value, colors, ranges));
        return(
          <Path key={stateData.id} stateName={stateData.id} d={stateData.d} impression={value}
            popularity={popularity} onClick={props.onClick} color={colorScale(value, colors, ranges)}/>
        )
      })
    )

  }

  return(
    <svg className={css(styles.svg)} transform={'scale(0.6)'} width={1000} height={700} float={'left'}>
      {handleStatePaths(uStatePaths)}
    </svg>
  )
}


export default D3USMap;
