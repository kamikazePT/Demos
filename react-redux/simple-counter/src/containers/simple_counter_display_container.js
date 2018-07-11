import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpleCounterDisplay from '../components/simple_counter_display';
import { getValue } from '../selectors/simple_counter_display_selectors';
import actionCreators from '../actions/simple_counter_actions';

class WrappedSimpleCounterDisplay extends Component{
  componentDidMount(){
    const { doSetDefault, defaultValue, value } = this.props;
    if(!value){
      doSetDefault(defaultValue);
    }
  }

  componentDidUpdate(){
    const { doSetDefault, defaultValue, value } = this.props;
    if(value === undefined || value === null){
      doSetDefault(defaultValue);
    }
  }

  render(){
    const { value } = this.props;
    if(value === undefined || value === null) return null;

    return (
      <SimpleCounterDisplay {...this.props}/>
    );
  }
}

WrappedSimpleCounterDisplay.defaultProps = {
  defaultValue : 0
};

WrappedSimpleCounterDisplay.propTypes = {
  doSetDefault : PropTypes.func.isRequired,
  defaultValue : PropTypes.number.isRequired,
  value : PropTypes.number
};

const { doSetDefault } = actionCreators;

const mapStateToProps = state => {
  return {
    value : getValue(state)
  };
};

export default connect(mapStateToProps, { doSetDefault })(WrappedSimpleCounterDisplay);