import React, { Component } from 'react';
import SimpleCounterPage from '../components/simple_counter_page';

class SimpleCounterPageContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      wasIncremented : false,
      wasDecremented : false
    };
  }

  onIncrement = () => {
    this.setState({
      wasIncremented : true,
      wasDecremented : false
    });
  }

  onDecrement = () => {
    this.setState({
      wasIncremented : false,
      wasDecremented : true
    });
  }

  render(){
    return (
      <SimpleCounterPage 
        {...this.props} 
        {...this.state}
        onDecrement={this.onDecrement} 
        onIncrement={this.onIncrement}
      />
    );
  }
}

export default SimpleCounterPageContainer;