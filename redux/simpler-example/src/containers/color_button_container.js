import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorButton from '../components/color_button';
import { isSelected } from '../selectors/color_button_list_selectors';
import buttonActions from '../actions/color_button_actions';
import { bindIndexToActionCreators } from 'redux-reducer-array-helpers';

class ColorButtonContainer extends Component{

  mapStateToProps = state => {
    return {
      isSelected : isSelected(state, this.props.index)
    };
  };

  componentWillMount(){
    this.component = connect(this.mapStateToProps, bindIndexToActionCreators(buttonActions, this.props.index))(ColorButton);
  }

  render(){
    const Component = this.component;

    return(
      <Component {...this.props}/>
    );
  }
}

ColorButtonContainer.propTypes = {
  color : PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};



export default ColorButtonContainer;