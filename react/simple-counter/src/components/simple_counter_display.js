import PropTypes from 'prop-types';

function SimpleCounterDisplay({ value }){
  return value;
}

SimpleCounterDisplay.propTypes = {
  value : PropTypes.number.isRequired
};

export default SimpleCounterDisplay;