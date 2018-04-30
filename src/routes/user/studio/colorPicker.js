import React, {Component} from 'react';
import CircularColor from 'react-circular-color';
import {Grid, Row, Col} from 'react-bootstrap';
import ColorWheelKnob from '../../../imgs/colorWheelKnob.png';
import ColorWheelKnob1 from '../../../imgs/colorWheelKnob1.png';
import ColorWheelKnob2 from '../../../imgs/colorWheelKnob2.png';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  background: {
    backgroundImage: `url(${ColorWheelKnob2})`,
    backgroundSize: 'cover',
  },
  colorBox: {
      height: '50px',
      width: '80px',
  },
})



class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors : ['grey','blue','red','green'],
    }
  }

  constuctOnChangeHandler(index){
    return (color)=>{
      console.log(index);
      this.setState((prevState) => {
        let colors = Object.assign({}, prevState.colors);
        colors[index] = color;
        console.log(colors);
        return {colors: colors};
      });
    }
  }

  constructCol = () => {
    let circularColorList = [];
    for(let i = 0; i < 4; i++){
      const index = i;
      // console.log(index);
      circularColorList.push(
        <Col key={i} lg={5} md={5}>
          <CircularColor className={css(styles.background)} size={200}
            onChange={this.constuctOnChangeHandler(index)} />
        </Col>
      );
    }
    return circularColorList;
  }

  constuctDisplayDiv = () => {
    let colorDisplayDivList = [];
    for(let i = 0; i < 4; i++){
      colorDisplayDivList.push(
        <div key={i}
          style={{backgroundColor:this.state.colors[i]}}
          className={css(styles.colorBox)}>
        </div>
      )
    }
    return colorDisplayDivList;
  }


  render(){
    return (
      <Grid>
        <Col lg={9} md={8} sm={12} >
          {this.constructCol()}
        </Col>
        <Col lg={2} md={3}>
          {this.constuctDisplayDiv()}
        </Col>
      </Grid>
    );
  }
}

export default ColorPicker;
