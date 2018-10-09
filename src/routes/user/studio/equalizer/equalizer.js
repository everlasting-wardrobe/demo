import React, {Component} from 'react';
import Controller from './controller';
import AMFM from './amfm';
import "./equalizer.css";
import ResetButton from './ResetButton.png';
import SaveButton from './SaveButton.png';
import { saveStylePresetsData } from '../../../routerAction';
import {connect} from 'react-redux';
import {propsFilter} from '../util/util';
import {updataMixingBoardData} from '../../../routerAction';


const targetProps = ['jazz', 'pop', 'indie', 'funk', 'jockjams', 'hiphop'];

class Equalizer extends Component{
  constructor(props){
    super(props);
    const {jazz, pop, indie, funk, jockjams, hiphop, totalPoints, pointBoundary} = this.props;
    this.state = {
      genres : ['jazz', 'pop', 'indie', 'funk', 'jockjams', 'hiphop'],
      colors : ['blue', 'yellow', 'orange', 'red', 'green', 'gray'],
      totalPoints: totalPoints || 0,
      pointBoundary: pointBoundary || 10,
      jazz: jazz || 0,
      pop: pop || 0,
      indie: indie || 0,
      funk: funk || 0,
      jockjams: jockjams || 0,
      hiphop: hiphop || 0,
      width: this.props.width || 1,
    }
    this.onAmfmResetClick = this.onAmfmResetClick.bind(this);
  };

  // setValue will set state value. it receive two params, genre and action,
  // which will change corresponding genre's value.
  setValue(genre, action){
    // console.log(`${genre}  ${action}`);
    let curState;
    if(action === 'plus'){
      if(this.state[genre] < 10 && this.state.totalPoints < 30){
        this.setState((prevState)=> {
          curState = {[genre]: prevState[genre] + 1};
          if(this.props.saveToRedux){
            this.props.saveToRedux(curState);
          }
          return {[genre]: prevState[genre] + 1, totalPoints: prevState.totalPoints + 1};
        });
      }
    }
    if(action === 'minus'){
      if(this.state[genre] > 0 && this.state.totalPoints > 0){
        this.setState((prevState)=> {
          curState = {[genre]: prevState[genre] - 1};
          if(this.props.saveToRedux){
            this.props.saveToRedux(curState);
          }
          return {[genre]: prevState[genre] - 1, totalPoints: prevState.totalPoints - 1};
        });
      }
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({...props});
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
      <div
        className={"equalizer"}
        style={{width: `${this.state.width * 100}vw`}}
      >
        <h3>
          {"-SYTLE PRESETS-"}
        </h3>
        <div className={"equalizer-container"}>
          <div className={'amfm-wrapper'}>
            <div className={'amfm-inner-wrapper'}>
              <AMFM rest={30 - this.state.totalPoints}
                onResetClick={this.onAmfmResetClick}/>
            </div>
          </div>
          <img className={"equalizer-reset-button"} src={ResetButton} alt={"RESET"} onClick={this.onAmfmResetClick}/>
          <img className={"equalizer-save-button"} src={SaveButton} alt={"SAVE"} onClick={this.props.onEqualizerSaveButtonClick}/>
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
  const propsFromReducer = propsFilter(targetProps, state.mixingBoardReducer);
  const totalPoints = Object.keys(propsFromReducer)
                            .reduce((sum, key)=>{return sum + propsFromReducer[key]}, 0);
  return {
    ...propsFromReducer,
    ...ownProps,
    totalPoints: totalPoints
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveToRedux : (data) => {
      const action = updataMixingBoardData(data);
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Equalizer);
