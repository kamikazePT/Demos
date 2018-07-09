import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButtonList from '../containers/color_button_list_container';
import ShuffleButton from '../containers/color_shuffle_button_container';
import classNames from 'classnames';

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
    const { isShuffling, hasColors } = this.props;

    if(!isShuffling && hasColors){
      const colorButtonListClasses = classNames('color-button-list-container', {'is-shuffling' : isShuffling});

      return (
        <div className={colorButtonListClasses}>
          <ColorButtonList />
        </div>
      );
    }
  }

  renderShufflingMessage(){
    const { isShuffling } = this.props;

    if(isShuffling){
      return (
        <div className="alert-info-container">
          <span className="alert-info">Shuffling</span>
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
          {this.renderFetchingMessage() || this.renderShufflingMessage() || this.renderButtonList()}
        </div>
        <ShuffleButton />
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
  doFetchColors : PropTypes.func.isRequired,
  isShuffling : PropTypes.bool.isRequired
};

export default ColorChooserGroup;