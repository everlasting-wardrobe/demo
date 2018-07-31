import React, {Component} from 'react';
import './util.css';
import Screw from './Screw.png';

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
    }

    render(){
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
}
