import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SimpleCounterArrows({ onIncrementClick, onDecrementClick }){

  return (
    <Fragment>
      <button type="button" onClick={onIncrementClick}>
        +
      </button>
      <button type="button" onClick={onDecrementClick}>
        -
      </button>
    </Fragment>
  );
}

SimpleCounterArrows.propTypes = {
  onIncrementClick : PropTypes.func.isRequired,
  onDecrementClick : PropTypes.func.isRequired
};

export default SimpleCounterArrows;