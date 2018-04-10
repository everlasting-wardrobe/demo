import React, {Component} from 'react';
import axios from 'axios';


export default class Datalist extends Component{
  // props cannot get and mutate by parent class, that means
  // we could not change the props in this component.
  constructor(props){
    super(props);
    this.state = {
      listName: props.listName,
      value: props.value,
      options: ''
    }
    this.inputHandler = this.inputHandler.bind(this);

  }

  //The reason it didn't work is the constuctor will only run once at the
  // first moment when this class was created. And after that, this method
  // would never be called again. Thus, this is not a good way to parse
  // data from parent component.

  // This method is used to initialize the class. There are other methods,
  // such as: componentWillReceiveProps , componentDidMount eg. to manage
  // this class's state.

  componentWillReceiveProps(nextProps){
    // this.setState would put a event to dirty queue, which makes this
    // process asynchromized.
    if(nextProps.value != this.state.value){
      this.setState({value: nextProps.value});
    }

    if(nextProps.options != this.state.options){
      this.setState({options: nextProps.options});
    }
  }

  renderOptions(options){
    if(options == ''){
      return;
    }
    return (
        options.map((option) => {
          return <option key={option.value}>{option.value}</option>
        })
    )
  }

    inputHandler(e){
      this.props.inputHandler(e.target.value);
    }

    render(){
      return (
        <div>
          <input
            list = {this.state.listName}
            className="search-input"
            value = {this.state.value}
            onChange = {this.inputHandler}/>
          <datalist id = {this.state.listName}>{this.renderOptions(this.state.options)}</datalist>
        </div>
      );
  }
}
