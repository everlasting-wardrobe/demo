import React, {Component} from 'react';
import Controller from './controller';
import "./equalizer.css";


export default class Equalizer extends Component{
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
    }
  };

  constructOnPlusClick(genre){
    return (value) => {
      console.log(value);
      console.log(this.state.totalPoints);
      console.log(typeof this.state.totalPoints);
      if(this.state.totalPoints < 30){
        console.log(this.state.totalPoints);
        this.setState((prevState)=> {
          console.log(prevState[genre]);
          return {[genre]: prevState[genre] + 1, totalPoints: prevState.totalPoints + 1}
        });
      }
      console.log(`${genre} ${this.state[genre]}`);
    };
  }

  constructOnMinusClick(genre){
    return (value) => {
      if(this.totalPoints > 0){
        this.setState((prevState)=> {
          return {[genre]: value, totalPoints: prevState.totalPoints - 1}
        });
      }
    };
  }

  constructTuneHandler = (type) => {
    return (value) => {
      this.setState({[type]: value});
    }
  };

  renderEqualizer(){
    return this.state.genres.map((genre, i) => {
      return (<Controller value={this.state[genre]} color={this.state.colors[i]}

              />);
    });
  }

  // onPlusClick = {this.constructOnPlusClick(genre).bind(this)}
  // onMinusClick = {this.constructOnMinusClick(genre).bind(this)}

  render(){
    let tuneHandler = this.constructTuneHandler('jazz').bind(this);
    return(
      <div>
        <div>Equalizer</div>
        <div className={"equalizer-container"}>
          {this.renderEqualizer()}
        </div>
      </div>
    )
  }

}
