import React, {Component} from 'react';
import D3BarChart from './d3BarChart';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  marginLeft: PropTypes.number,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight:PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    total: PropTypes.number,
  }))
}

const defaultProps = {
  width: 400,
  height: 400,
  marginLeft: 150,
  marginRight: 150,
  marginTop:150,
  marginBottom:150,
  data: [
    {
  		"label": "January",
  		"num": [13432,2498,],
  	},
  	{
  		"label": "February",
  		"num": [19342,14838,],
  	},
  	{
  		"label": "March",
  		"num": [17443, 19875,],
  	},
  	{
  		"label": "April",
  		"num": [26342, 48921,],
  	},
  	{
  		"label": "May",
  		num: [34213,43987,],
  	},
  	{
  		"label": "June",
  		num: [50321, 45321,],
  	},
  ]
}

class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      basic : props,
      data : props.data,
    }
  }

  render(){
    return(
      <div>
        <D3BarChart
          width= {400} height = {400} marginTop={50}
          marginBottom={50} marginLeft={50} marginRight={50}
         data={this.state.data} />
      </div>
    )
  }
}

BarChart.propTypes = propTypes;
BarChart.defaultProps = defaultProps;

export default BarChart;
