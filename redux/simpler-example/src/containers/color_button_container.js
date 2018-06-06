import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorButton from '../components/color_button';
import { getSelectedColor } from '../selectors/color_button_list_selectors';
import buttonActions from '../actions/color_button_actions';

class ColorButtonContainer extends Component{
  doSelectColor = () => this.props.doSelectColor(this.props.color.value)

  render(){
    const { color, selectedColor } = this.props;

    return(
      <ColorButton {...this.props} doSelectColor={this.doSelectColor} isSelected={color.value === selectedColor}/>
    );
  }
}

ColorButtonContainer.propTypes = {
  color : PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  doSelectColor : PropTypes.func.isRequired,
  selectedColor : PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedColor : getSelectedColor(state)
  };
};

export default connect(mapStateToProps, buttonActions)(ColorButtonContainer);