import React, { Fragment } from 'react';
import ColorButton from '../containers/color_button_container';
import PropTypes from 'prop-types';

function ColorButtonList(props){
  const { colors } = props;

  return(
    <Fragment>
      {colors.map((color, i) => (
        <ColorButton key={i} color={color} index={i}/>
      ))}
    </Fragment>
  );
}

ColorButtonList.propTypes = {
  colors : PropTypes.arrayOf(PropTypes.shape({
    value : PropTypes.string.isRequired
  })).isRequired
};

export default ColorButtonList;