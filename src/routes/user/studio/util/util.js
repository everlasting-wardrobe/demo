import React, {Component} from 'react';
import './util.css';
import Screw from './Screw.png';
import InfoButton from './InfoButton.png';
import InfoButtonLeft from './InfoButtonLeft.png';
import InfoButtonRight from './InfoButtonRight.png';

export function withScrewBackground(WrappedComponent){
  return (props) => {
    return(
      <div className={'screw-panel-background'} style={{width: `${props.width * 100}vw`}}>
        <WrappedComponent {...props} />
        <img src={Screw} className={'screw-top-left'}/>
        <img src={Screw} className={'screw-top-right'}/>
        <img src={Screw} className={'screw-bottom-left'}/>
        <img src={Screw} className={'screw-bottom-right'}/>
      </div>
    )
  }
}


export function withPanelBackground(WrappedComponent){
  return (props) => {
    return(
      <div className={'panel-background'}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}


export class InfoButtonInsertion extends Component{
    constructor(props){
      super(props);
      this.state = {
        infoButtons : {
          left  : InfoButtonLeft,
          right : InfoButtonRight,
          inside: InfoButton
        },
        type: this.props.type,
        top: this.props.top,
        left: this.props.left,
        right: this.props.right,
        bottom: this.props.bottom,
        width: this.props.size,
      }
    }

    static defaultProps = {
      type: "inside",
      width: `40px`,
    }

    getImg = (type) => {
      let background;
      if(type === 'left'){
        return InfoButtonLeft;
      }else if(type === 'right'){
        return  InfoButtonRight;
      }else{
        return InfoButton;
      }
    }

    constructStyle = ()=>{
      let style = {};
      if(!this.state.top && ! this.state.bottom){
        style.top = 0;
      }else if(this.state.top){
        style.top = this.state.top;
      }else{
        style.bottom = this.state.bottom;
      }
      if(!this.state.left && ! this.state.right){
        style.left = 0;
      }else if(this.state.left){
        style.left = this.state.left;
      }else{
        style.right = this.state.right;
      }
      style.width = this.state.width;
      return style;
    }

    render(){
      const ButtonImg = this.getImg(this.state.type);
      const style = this.constructStyle();
      return (
        <div className={"info-button-insertion"}>
          <img src={ButtonImg} alt={"info button"} className={"info-button"}
          style={style} />
          {this.props.children}
        </div>
      )
    }
}
