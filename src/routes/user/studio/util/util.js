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



const constructStyle = (state)=>{
  let style = {};
  if(!state.top && ! state.bottom){
    style.top = 0;
  }else if(state.top){
    style.top = state.top;
  }else{
    style.bottom = state.bottom;
  }
  if(!state.left && ! state.right){
    style.left = 0;
  }else if(state.left){
    style.left = state.left;
  }else{
    style.right = state.right;
  }
  style.width = state.width;
  return style;
}


// InfoButtonInsertion

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
        displayAttachment: this.props.displayAttachment,
      }

      this.onClick = this.onClick.bind(this);
    }

    static defaultProps = {
      type: "inside",
      width: `40px`,
      displayAttachment: false,
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

    addPropsToAttachment = ()=>{
      return React.Children.map(this.props.children, (child) =>{
        if(child.type.displayName === "Attachment"){
          this.attachmentChild = React.cloneElement(child, {onClick : this.onClick});
        }else{
          return child;
        }
      })
    }

    onClick = () => {
      this.setState((prevState)=>{
        return {displayAttachment: !prevState.displayAttachment};
      })
    }

    render(){
      const ButtonImg = this.getImg(this.state.type);
      const style = constructStyle(this.state);
      const children = this.addPropsToAttachment();
      return (
        <div className={"info-button-insertion"}>
          <img src={ButtonImg} alt={"info button"} className={"info-button"}
          style={style} onClick={this.onClick}/>
          {this.state.displayAttachment && this.attachmentChild}
          {children}
        </div>
      )
    }
}



// Attachment start here


export class Attachment extends Component{
  constructor(props){
    super(props);
    this.state = {
      display : this.props.display,
      left: this.props.left,
      right: this.props.right,
      top: this.props.top,
      bottom: this.props.bottom,
      buttonState : {
        left: this.props.buttonLeft,
        right: this.props.buttonRight,
        top: this.props.buttonTop,
        bottom: this.props.buttonBottom,
      }
    }
  }

  static displayName = "Attachment";

  componentDidMount(props){
    console.log(props);
  }

  render(){
    const style = constructStyle(this.state);
    const buttonStyle=constructStyle(this.state.buttonState);
    return (
        <div className={`studio-attachment ${!this.state.display && 'hidden'}`} style={style}>
          <div className={'attachment-close-wrapper'}>
            <div className={'attachment-close'} onClick={this.props.onClick} ></div>
            {this.props.children}
          </div>
        </div>
    )
  }

  static defaultProps={
    display: true,
    left: 0,
    top: 0,
    buttonLeft: 0,
    buttonTop: 0,
  }

}
