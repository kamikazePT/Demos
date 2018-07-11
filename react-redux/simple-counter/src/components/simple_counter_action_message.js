import React from 'react';
import PropTypes from 'prop-types';

function tryRenderMessage(shouldShow, text){
  if(shouldShow){
    return text;
  }
}

function SimpleCounterActionMessage(props){
  const { wasIncremented, wasDecremented } = props;

  return (
    <p>
      {(
        tryRenderMessage(wasIncremented, 'Counter was incremented')
        || tryRenderMessage(wasDecremented, 'Counter was decremented')
        || 'N/D'
      )}
    </p>
  );
}

SimpleCounterActionMessage.defaultProps = {
  wasDecremented : false,
  wasIncremented : false
};

SimpleCounterActionMessage.propTypes = {
  wasIncremented : PropTypes.bool.isRequired,
  wasDecremented : PropTypes.bool.isRequired
};

export default SimpleCounterActionMessage;