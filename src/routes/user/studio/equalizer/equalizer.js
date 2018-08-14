import React, {Component} from 'react';
import Controller from './controller';
import AMFM from './amfm';
import "./equalizer.css";
import ResetButton from './ResetButton.png';
import SaveButton from './SaveButton.png';
import {connect} from 'react-redux';


class Equalizer extends Component{
  constructor(props){
    super(props);
    const {jazz, pop, indie, funk, jockJams, hipHop, totalPoints, pointBoundary} = this.props;
    this.state = {
      genres : ['jazz', 'pop', 'indie', 'funk', 'jockJams', 'hipHop'],
      colors : ['blue', 'yellow', 'orange', 'red', 'green', 'gray'],
      totalPoints: totalPoints || 0,
      pointBoundary: pointBoundary || 10,
      jazz: jazz || 0,
      pop: pop || 0,
      indie: indie || 0,
      funk: funk || 0,
      jockJams: jockJams || 0,
      hipHop: hipHop || 0,
      width: this.props.width || 1,
    }
    this.onAmfmResetClick = this.onAmfmResetClick.bind(this);
  };

  // setValue will set state value. it receive two params, genre and action,
  // which will change corresponding genre's value.
  setValue(genre, action){
    // console.log(`${genre}  ${action}`);
    if(action === 'plus'){
      if(this.state[genre] < 10 && this.state.totalPoints < 30){
        this.setState((prevState)=> {
          return {[genre]: prevState[genre] + 1, totalPoints: prevState.totalPoints + 1}
        });
      }
    }
    if(action === 'minus'){
      if(this.state[genre] > 0 && this.state.totalPoints > 0){
        this.setState((prevState)=> {
          return {[genre]: prevState[genre] - 1, totalPoints: prevState.totalPoints - 1}
        });
      }
    }
  }

  // construct event listener function for controller corresponding to genre and action.
  // Each function will carry two states, genre and action.
  constructOnTuneClick = (genre, action) => {
    let onTuneClick = () => {
      this.setValue(genre, action);
    }
    return onTuneClick.bind(this);
  };

  onAmfmResetClick = ()=> {
    this.state.genres.forEach((genre) => {
      this.setState({[genre]: 0});
    });
    this.setState({totalPoints: 0});
  }

  // traverse differents kinks of genres and generate corresponding controller.
  renderControllers(){
    return this.state.genres.map((genre, i) => {
      return (
        <div key={i}>
          <div className={'controller-wrapper'}>
            <Controller value={this.state[genre]} color={this.state.colors[i]}
              onPlusClick = {this.constructOnTuneClick(genre, 'plus')}
              onMinusClick = {this.constructOnTuneClick(genre, 'minus')}
              title={genre} width={this.state.width}/>
          </div>
        </div>
      );
    });
  }


  render(){
    return(
      <div className={"equalizer"} style={{width: `${this.state.width * 100}vw`}}>
        <h3 style={{fontSize: `${this.state.width * 10}vw`}}>{"-SYTLE PRESETS-"}</h3>
        <div className={"equalizer-container"}>
          <div className={'amfm-wrapper'}>
            <div className={'amfm-inner-wrapper'}>
              <AMFM rest={30 - this.state.totalPoints}
                onResetClick={this.onAmfmResetClick}/>
            </div>
          </div>
          <img className={"equalizer-reset-button"} src={ResetButton} alt={"RESET"} onClick={this.onAmfmResetClick}/>
          <img className={"equalizer-save-button"} src={SaveButton} alt={"SAVE"}/>
          <div className={'controller-container-wrapper'}>
            <div className={"controller-container"}>
              {this.renderControllers()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    ...state.stylePresetsReducer,
    ...ownProps,
  }
}



export default connect(mapStateToProps)(Equalizer);
