import React from 'react';
import PropTypes from 'prop-types';
import SimpleCounterDisplay from './simple_counter_display';
import SimpleCounterArrows from './simple_counter_arrows';

function SimpleCounter({ value, onIncrementClick, onDecrementClick }){

  return (
    <div>
      <span>
        <SimpleCounterDisplay value={value}/>
      </span>
      <span>
        <SimpleCounterArrows onIncrementClick={onIncrementClick} onDecrementClick={onDecrementClick}/>
      </span>
    </div>
  );
}

SimpleCounter.propTypes = {
  value : PropTypes.number.isRequired,
  onIncrementClick : PropTypes.func.isRequired,
  onDecrementClick : PropTypes.func.isRequired
};

export default SimpleCounter;