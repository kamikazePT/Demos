import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ColorButton(props){
  const { color, onClick, isSelected } = props;

  const containerClasses = classNames('color-button-container', {
    'is-selected' : isSelected
  });

  return(
    <div className={containerClasses}>
      <button className="btn btn-color" style={{ backgroundColor : color.value }} onClick={onClick} type="button">{color.label}</button>
    </div>
  );
}

ColorButton.propTypes = {
  color : PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onClick : PropTypes.func.isRequired,
  isSelected : PropTypes.bool.isRequired
};

export default ColorButton;