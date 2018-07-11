import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleCounter from '../components/simple_counter';

class SimpleCounterContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : null
    };
  }

  onIncrementClick = () => {
    const { onIncrement } = this.props;
    const { value } = this.state;
    this.setState({
      value : value+1
    }, onIncrement);
  }

  onDecrementClick = () => {
    const { onDecrement } = this.props;
    const { value } = this.state;
    this.setState({
      value : value-1
    }, onDecrement);
  }

  static getDerivedStateFromProps(props, state){
    if(!state.value || props.value !== undefined){
      return {
        value : props.defaultValue
      };
    }

    return null;
  }

  render(){
    return (
      <SimpleCounter 
        {...this.props}
        {...this.state} 
        onDecrementClick={this.onDecrementClick} 
        onIncrementClick={this.onIncrementClick}
      />
    );
  }
}

SimpleCounterContainer.defaultProps = {
  defaultValue : 0,
  onIncrement : () => {},
  onDecrement : () => {}
};

SimpleCounterContainer.propTypes = {
  defaultValue : PropTypes.number.isRequired,
  onIncrement : PropTypes.func.isRequired,
  onDecrement : PropTypes.func.isRequired
};

export default SimpleCounterContainer;