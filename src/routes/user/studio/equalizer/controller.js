import React, {Component} from 'react';
import PanelButton from './PanelLevelsButton.png';
import PanelOver from './PanelLevelsOverButton.png';
import PanelLevelsPlusSymbol from './PanelLevelsPlusSymbol.png';
import PanelLevelsMinusSymbol from './PanelLevelsMinusSymbol.png';
import './controller.css';

export default class Controller extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value || 0,
      color: this.props.color || 'green',
      title: this.props.title || 'Equalizer',
      width: this.props.width || 1,
    };

    this.onPlusClick = () => {
      if(typeof this.props.onPlusClick === 'function'){
        this.props.onPlusClick(this.state.value + 1);
      }else{
        this.setValue('plus');
      }
    };

    this.onMinusClick = () => {
      if(typeof this.props.onMinusClick === 'function'){
        this.props.onMinusClick(this.state.value - 1);
      }else{
        this.setValue('minus');
      }
    }
  }

  setValue(action){
    if(action === 'plus'){
      this.setState((prevState) =>{
        if(prevState.value < 10){
          return {value: prevState.value + 1};
        }
      })
    }else if(action === 'minus'){
      this.setState((prevState) => {
        if(prevState.value > 0){
          return {value: prevState.value - 1};
        }
      })
    }
  }

  componentWillReceiveProps({value}){
    this.setState({value});
  }

  renderValueDiplay(value){
    let divSet = [];
    for(let i = 0; i < value; i++){
      divSet.push(<div key={i} style={{backgroundColor:'#96D6D7'}} className="equalizer-value-box"></div>);
    }
    return divSet;
  }

  render(){
    return (
      <div className={"equalizer-controller"}>
        <div className={"equalizer-controller-wrapper"}>
          <img src={PanelOver} style={{width:'100%'}} className="equalizer-panel-over" />
          <div className="equalizer-value-box-container">
            {this.renderValueDiplay(this.state.value)}
          </div>
        </div>
        <div className={"equalizer-panel-button-wrapper"}>
          <div className={"equalizer-button-plus-wrapper"} onClick={this.onPlusClick}>
            <img className={"equalizer-panel-button-plus"} src={PanelLevelsPlusSymbol} />
          </div>
          <div className={"equalizer-button-minus-wrapper"} onClick={this.onMinusClick}>
            <img className={"equalizer-panel-button-minus"} src={PanelLevelsMinusSymbol} />
          </div>
          <img src={PanelButton} className="equalizer-panel-button"/>
          <div className={'equalizer-controller-title'} style={{fontSize: `${this.state.width}vw`}}>
            <p>{this.state.title.toUpperCase()}</p>
          </div>
        </div>
      </div>
    )
  }
}
