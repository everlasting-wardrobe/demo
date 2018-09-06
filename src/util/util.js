import React, {Component} from 'react';

export const asyncLoadable = (ImportComponent) => {
  class AsyncLoadable extends Component {
    constructor(props){
      super(props);
      this.state = {
        component: null
      };
    }

    componentDidMount = () => {
      this.setState({component: ImportComponent});
    }

    render(){
      const C = this.state.component;

      return C? <C {...this.props} /> : null;
    }
  }

  return AsyncLoadable;
}
