import React, { Component, Fragment } from 'react';
import ColorButton from './color_button';
import PropTypes from 'prop-types';

class ColorButtonList extends Component{
  _onColorClick = (color) => {
    return () => this.props.doSelectColor(color.value);
  }

  render(){
    const { selectedColor, colors, ...props } = this.props;

    return(
      <Fragment>
        {colors.map((color, i) => (
          <ColorButton key={i} {...props} color={color} onClick={this._onColorClick(color)} isSelected={color.value === selectedColor}/>
        ))}
      </Fragment>
    );
  }
}

ColorButtonList.propTypes = {
  colors : PropTypes.arrayOf(PropTypes.shape({
    value : PropTypes.string.isRequired
  })).isRequired,
  selectedColor : PropTypes.string,
  doSelectColor : PropTypes.func.isRequired
};

export default ColorButtonList;