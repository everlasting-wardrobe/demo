import React, {Component} from 'react';
import "./patternPad.css"
import AlwaysLight from './patternImg/AlwaysLight.png';
import NeverLight from './patternImg/NeverLight.png';
import SometimesLight from './patternImg/SometimesLight.png';
import Logos2 from './patternImg/Logos2.png';
import Logos1 from './patternImg/Logos1.png';
import Logos0 from './patternImg/Logos0.png';
import Animal0 from './patternImg/Animal0.png';
import Animal1 from './patternImg/Animal1.png';
import Animal2 from './patternImg/Animal2.png';
import Check0 from './patternImg/Check0.png';
import Check1 from './patternImg/Check1.png';
import Check2 from './patternImg/Check2.png';
import Dots0 from './patternImg/Dots0.png';
import Dots1 from './patternImg/Dots1.png';
import Dots2 from './patternImg/Dots2.png';
import Fabric0 from './patternImg/Fabric0.png';
import Fabric1 from './patternImg/Fabric1.png';
import Fabric2 from './patternImg/Fabric2.png';
import Graphics0 from './patternImg/Graphics0.png';
import Graphics1 from './patternImg/Graphics1.png';
import Graphics2 from './patternImg/Graphics2.png';
import Heather0 from './patternImg/Heather0.png';
import Heather1 from './patternImg/Heather1.png';
import Heather2 from './patternImg/Heather2.png';
import Prints0 from './patternImg/Prints0.png';
import Prints1 from './patternImg/Prints1.png';
import Prints2 from './patternImg/Prints2.png';
import Sayings0 from './patternImg/Sayings0.png';
import Sayings1 from './patternImg/Sayings1.png';
import Sayings2 from './patternImg/Sayings2.png';
import Scales0 from './patternImg/Scales0.png';
import Scales1 from './patternImg/Scales1.png';
import Scales2 from './patternImg/Scales2.png';
import Solids0 from './patternImg/Solids0.png';
import Solids1 from './patternImg/Solids1.png';
import Solids2 from './patternImg/Solids2.png';
import Stripes0 from './patternImg/Stripes0.png';
import Stripes1 from './patternImg/Stripes1.png';
import Stripes2 from './patternImg/Stripes2.png';
import {withPanelBackground} from '../util/util'

class PatternPannel extends Component{
  constructor(props){
    super(props);
    this.state = {
      index : [0,1,2,3,4,5,6,7,8,9],
      pattern : ['logos', 'fabric', 'graphics' ,'sayings', 'solids', 'heather', 'animal','dots','check','stripes','scales', 'prints'],
      fabric: {
        prefer : 1,
        imgsrc: [Fabric0, Fabric1, Fabric2],
        info : "fabric",
      },
      graphics:{
        prefer : 1,
        imgsrc: [Graphics0, Graphics1, Graphics2],
        info : "graphics",
      },
      logos: {
        prefer : 1,
        imgsrc: [Logos0, Logos1, Logos2],
        info : "logos",
      },
      sayings: {
        prefer : 1,
        imgsrc: [Sayings0, Sayings1, Sayings2],
        info : "sayings",
      },
      solids: {
        prefer : 1,
        imgsrc: [Solids0, Solids1, Solids2],
        info : "solids",
      },
      heather: {
        prefer : 1,
        imgsrc: [Heather0, Heather1, Heather2],
        info : "heather",
      },
      animal:{
        prefer : 1,
        imgsrc: [Animal0, Animal1, Animal2],
        info : "animal",
      },
      dots:{
        prefer : 1,
        imgsrc: [Dots0, Dots1, Dots2],
        info : "dots",
      },
      check:{
        prefer : 1,
        imgsrc: [Check0, Check1, Check2],
        info : "check",
      },
      stripes:{
        prefer : 1,
        imgsrc: [Stripes0, Stripes1, Stripes2],
        info : "stripes",
      },
      scales:{
        prefer : 1,
        imgsrc: [Scales0, Scales1, Scales2],
        info : "scales",
      },
      prints:{
        prefer : 1,
        imgsrc: [Prints0, Prints1, Prints2],
        info : "prints",
      },
      width : this.props.width|| 1,
    }
  }
  renderPatternicon=() =>{
    return this.state.pattern.map((pattern, i) =>{
      return(
          <div className={'pattern-icon-wrapper'} key={i}>
            <img src={this.patternImgsrc(pattern)} onClick={()=>this.patternOnClick(pattern)} alt="${pattern}" className="patternImg"
             title={this.state[pattern].info}/>
          </div>
      );
    });
  }

  patternOnClick = (pattern) =>{
    setTimeout(()=>{
      let patternST = Object.assign({}, this.state[pattern]);
      if(patternST.prefer === 2){
        patternST.prefer = 0;
        this.setState({[pattern] :patternST});
      }else{
        patternST.prefer = patternST.prefer + 1;
        this.setState({[pattern] :patternST});
      }
    },10);
    // let patternST = Object.assign({}, this.state[pattern]);
    // if(patternST.prefer === 2){
    //   patternST.prefer = 0;
    //   this.setState({[pattern] :patternST});
    // }else{
    //   patternST.prefer = patternST.prefer + 1;
    //   this.setState({[pattern] :patternST});
    // }
    // console.log(this.state[pattern]);
    // console.log(this.state[pattern].prefer);
  }

  patternImgsrc = (pattern) =>{
    switch (this.state[pattern].prefer) {
      case 0: return this.state[pattern].imgsrc[0];
      case 1: return this.state[pattern].imgsrc[1];
      case 2: return this.state[pattern].imgsrc[2];
    }
  }

  render(){
    return(
      <div className={"patternPannel"} style={{width:`${this.state.width*100}vw`}}>
        <div className="patternPannel-title">
        -PATTERN PAD-
        </div>
        <div className ={"patternPannel-patterns"}>
          {this.renderPatternicon()}
        </div>
        <div className={"patternPannel-footer"}>
          <div className={"patternPannel-footer-part"} >
              <img src ={AlwaysLight} />
              <span>ALWAYS</span>
          </div>
          <div className={"patternPannel-footer-part"} >
              <img src ={SometimesLight} />
              <span>SOMETIMES</span>
          </div>
          <div className={"patternPannel-footer-part"} >
              <img src ={NeverLight} />
              <span>NEVER</span>
          </div>
        </div>
      </div>
    );
  }
}

export const PatternPannelWithBackground = withPanelBackground(PatternPannel);
