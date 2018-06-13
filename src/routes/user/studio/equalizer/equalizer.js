import React, {Component} from 'react';
import Controller from './controller';
import "./equalizer.css";


export default class Equalizer extends Component{
  constructor(props){
    super(props);
    const Genres = [];
    const {jazz, pop, indie, funk, jockJams, hipHop, totalPoints, pointBoundary} = this.props;
    this.state = {
      totalPoints: totalPoints || 30,
      pointBoundary: pointBoundary || 10,
      jazz: jazz || 0,
      pop: pop || 0,
      indie: indie || 0,
      funk: funk || 0,
      jockJams: jockJams || 0,
      hipHop: hipHop || 0,
    }
  };

  componentWillMount(){

  }

  totalPointsCounter(){

  }

  constructTuneHandler = (type) => {
    return (value) => {
      this.setState({[type]: value});
    }
  };

  render(){
    let tuneHandler = this.constructTuneHandler('jazz').bind(this);
    return(
      <div>
        <div>Equalizer</div>
        <div className={"equalizer-container"}>
          <Controller value= {9} color='green' />
          <Controller value= {10} color= 'red'/>
          <Controller value= {3} color='blue'/>
        </div>
      </div>
    )
  }

}
