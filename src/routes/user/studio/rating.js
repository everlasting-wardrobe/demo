import React,{Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Slider = createSliderWithTooltip(Slider);

class Rating extends Component{
  constructor(props){
    super(props);
    this.state={
      item : props.item,
      onUpdateClick: props.onUpdateClick,
      newFitRating: props.item.fitRating,
      newStyleRating: props.item.styleRating,
    }
  }

  componentWillReceiveProps(props){
    console.log(props.item);
    this.setState({
      item: props.item,
      newFitRating: props.item.fitRating,
      newStyleRating: props.item.styleRating,
    });
    this.forceUpdate();
  }

  render(){
    return(
      <Grid>
        <Col lg={3} md={3} sm={3} xs={3}>
          <Slider key={`fitSlider${this.state.item.key}`} ref={(fitSlider)=>{this.fitSlider=fitSlider}} min={1} max={5} marks={{1:'1', 2:'2', 3:'3', 4:'4', 5:'5'}}
            defaultValue={this.state.item.fitRating} disabled={false} onChange={value => {this.setState({newFitRating: value})}}/>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3} style={{height:'200px'}}>
          <Slider key={`styleSlider${this.state.item.key}`} ref={(styleSlider)=>{this.styleSlider=styleSlider}} min={1} max={5}
            marks={{1:'1', 2:'2', 3:'3', 4:'4', 5:'5'}} defaultValue={this.state.item.styleRating}
              onChange={ value =>{this.setState({newStyleRating: value})}}
            />
        </Col>
        <Button onClick={()=>{this.state.onUpdateClick(this.state.newFitRating, this.state.newStyleRating)}}>Update</Button>
      </Grid>
    )
  }


}

// const Rating = ({item, onUpdateClick}) => {
//   const {fitRating, styleRating} = item;
//   let newFitRating, newStyleRating;
//
//   return(
//     <Grid>
//       <Col lg={3} md={3} sm={3} xs={3}>
//         <Slider min={1} max={5} marks={{1:'1', 2:'2', 3:'3', 4:'4', 5:'5'}}
//           defaultValue={fitRating} handle={(props)=>{
//             newFitRating = props.value;
//           }}/>
//       </Col>
//       <Col lg={3} md={3} sm={3} xs={3} style={{height:'200px'}}>
//         <Slider vertical={true} min={1} max={5}
//           marks={{1:'1', 2:'2', 3:'3', 4:'4', 5:'5'}} defaultValue={styleRating}
//           handle={(props) => {
//             newStyleRating = props.value;
//           }}/>
//       </Col>
//       <Button onClick={onUpdateClick}>Update</Button>
//     </Grid>
//   )
// }

export default Rating;
