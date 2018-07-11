import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SimpleCounter from '../containers/simple_counter_container';
import SimpleCounterActionMessage from './simple_counter_action_message';

function SimpleCounterPage(props){
  const { onIncrement, onDecrement, wasIncremented, wasDecremented } = props;

  return (
    <Fragment>
      <h1>Simple Counter React Only Demo</h1>
      <SimpleCounter onIncrement={onIncrement} onDecrement={onDecrement}/>
      <SimpleCounterActionMessage wasIncremented={wasIncremented} wasDecremented={wasDecremented}/>
    </Fragment>
  );
}

SimpleCounterPage.defaultProps = {
  wasDecremented : false,
  wasIncremented : false
};

SimpleCounterPage.propTypes = {
  onIncrement : PropTypes.func.isRequired,
  onDecrement : PropTypes.func.isRequired,
  wasIncremented : PropTypes.bool.isRequired,
  wasDecremented : PropTypes.bool.isRequired
};

export default SimpleCounterPage;