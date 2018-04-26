import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      page : 0,
    }
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious(){
    let page = this.state.page;
    page--;
    this.setState({page});
    this.forceUpdate();
  }

  handleNext(){
    let page = this.state.page;
    page++;
    this.setState({page});
    this.forceUpdate();
  }

  constructSubpage(subpageNum){
    console.log(String(subpageNum));
    switch (String(subpageNum)) {
      case '0':
        return (<div className="subpage">
            <h3>{`Tell us about your special one`} </h3>
            <Button onClick={this.handleNext}> next </Button>
         </div>);
        break;
      case '1':
        return (<div className="subpage">
          <h3>{`Select your Wardrobe`}</h3>
          <Button onClick={this.handlePrevious}>Previous</Button>
          <Button onClick={this.handleNext}>Next</Button>
        </div>);
        break;
      case '2':
        return (
          <div className="subpage">
            <h3>{`Shipping`}</h3>
            <Button onClick={this.handlePrevious}>Previous</Button>
            <Button onClick={this.handleNext}>Next</Button>
          </div>
        );
        break;
      case '3':
        return (
          <div className="subpage">
            <h3>{`Payment`}</h3>
            <Button onClick={this.handlePrevious}>Previous</Button>
          </div>
        );
        break;
    }
  }

  render(){
    return (
      <div>
        <div className = "subpage-container">
          {this.constructSubpage(this.state.page)}
        </div>
      </div>
    )
  }

  componentWillUpdate(){

  }
}

export default Signup;
