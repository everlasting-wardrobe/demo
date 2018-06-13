import React, {Component} from 'react';
import PanelBottom from './PanelLevelsButton.png';
import PanelOver from './PanelLevelsOverButton.png';
import './controller.css';

export default class Controller extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value || 0,
      color: this.props.color || 'green',
    }
  }

  renderValueDiplay(value){
    let divSet = [];
    for(let i = 0; i < value; i++){
      divSet.push(<div key={i} style={{backgroundColor:this.state.color}} className="equalizer-value-box"></div>);
    }
    return divSet;
  }

  render(){
    return (
      <div className={"equalizer-controller"}>
        <div>
        <div className={"equalizer-wrapper"}>
          <img src={PanelOver} style={{width:'100%'}} className="equalizer-panel-over" />
          <div className="equalizer-value-box-container">
            {this.renderValueDiplay(this.state.value)}
          </div>
        </div>
        </div>
        <embed src={PanelBottom} className="equalizer-panel-button"/>
      </div>
    )
  }
}
