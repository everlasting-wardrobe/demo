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



// Loaded Image, this image will display only after it is loaed.
export class LoadedImg extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgLoaded: false,
      loaded: this.props.onLoad,
    }
    this.onImageLoaded = this.onImageLoaded.bind(this);
  }

  onImageLoaded = ()=>{
    this.setState({imgLoaded: true});
    if(this.state.loaded && typeof this.state.loaded === 'function'){
      this.state.loaded();
    }
  }

  render(){
    const style={
      ...this.props.style,
      display: `${this.state.imgLoaded? 'inline-block' : 'hidden'}`,
    }

    return (
      <img
        {...this.props}
        style={style}
        onLoad={this.onImageLoaded}
      />
    )
  }

}


export const asyncLoadable = (ImportComponent) => {
  class AsyncLoadable extends Component {
    constructor(props){
      super(props);
      this.state = {
        component: null
      };
    }

    componentDidMount = async () => {
      this.setState({component: ImportComponent})
    }

    render(){
      const C = this.state.component;

      return C? <C {...this.props} /> : null;
    }
  }

  return AsyncLoadable;
}


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div style={{width:'50%', maxWidth:'600px', margin: 'auto'}}>
          <h2 style={{textAlign: 'center'}}>
            Something went wrong.
          </h2>
            <div>
              <img
                style={{width: '100%'}}
                src={"https://res.cloudinary.com/xiaoxu/image/upload/v1535247819/global/oops.png"}
                alt="Oops!"
              />
            </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export const Spinner = () => (
  <div className="sk-circle">
    <div className="sk-circle1 sk-child"></div>
    <div className="sk-circle2 sk-child"></div>
    <div className="sk-circle3 sk-child"></div>
    <div className="sk-circle4 sk-child"></div>
    <div className="sk-circle5 sk-child"></div>
    <div className="sk-circle6 sk-child"></div>
    <div className="sk-circle7 sk-child"></div>
    <div className="sk-circle8 sk-child"></div>
    <div className="sk-circle9 sk-child"></div>
    <div className="sk-circle10 sk-child"></div>
    <div className="sk-circle11 sk-child"></div>
    <div className="sk-circle12 sk-child"></div>
  </div>
)
