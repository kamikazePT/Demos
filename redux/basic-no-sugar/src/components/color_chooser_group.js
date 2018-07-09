import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButtonList from '../containers/color_button_list_container';

class ColorChooserGroup extends Component{
  componentDidMount(){
    this.props.doFetchColors();
  }

  renderFetchingMessage(){
    const { isFetching } = this.props;

    if(isFetching){
      return (
        <div className="alert-info-container">
          <span className="alert-info">Fetching</span>
        </div>
      );
    }
  }

  renderButtonList(){
    const { hasColors } = this.props;

    if(hasColors){
      return (
        <div className="color-button-list-container">
          <ColorButtonList />
        </div>
      );
    }
  }

  render(){
    const { selectedColor } = this.props;
    const pageStyles = selectedColor ? { backgroundColor : selectedColor.value } : {};

    return(
      <div className="color-chooser-page-container">
        <div className="color-panel-container" style={pageStyles}>
          {this.renderFetchingMessage() || this.renderButtonList()}
        </div>
      </div>
    );
  }
}

ColorChooserGroup.propTypes = {
  selectedColor : PropTypes.shape({
    value: PropTypes.string.isRequired
  }),
  hasColors : PropTypes.bool.isRequired,
  isFetching : PropTypes.bool.isRequired,
  doFetchColors : PropTypes.func.isRequired
};

export default ColorChooserGroup;