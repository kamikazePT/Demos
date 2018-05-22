import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButtonList from './color_button_list';
import classNames from 'classnames';

class ColorChooserPage extends Component{
  componentDidMount(){
    this.props.fetchColors();
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
    const { colors, isShuffling } = this.props;

    if(!isShuffling && colors.length > 0){
      const colorButtonListClasses = classNames('color-button-list-container', {'is-shuffling' : isShuffling});

      return (
        <div className={colorButtonListClasses}>
          <ColorButtonList {...this.props}/>
        </div>
      );
    }
  }

  renderShuffleButton(){
    const { colors } = this.props;

    if(colors.length > 0){
      return (
        <div className="shuffle-button-container">
          <button className="btn btn-shuffle" onClick={this.props.shuffleColors} type="button">Shuffle All</button>
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
    const pageStyles = selectedColor ? { backgroundColor : selectedColor } : {};

    return(
      <div className="color-chooser-page-container">
        <div className="color-panel-container" style={pageStyles}>
          {this.renderFetchingMessage() || this.renderShufflingMessage() || this.renderButtonList()}
        </div>
        {this.renderShuffleButton()}
      </div>
    );
  }
}

ColorChooserPage.defaultProps = {
  colors : [],
  isFetching : false,
  isShuffling : false,
};

ColorChooserPage.propTypes = {
  selectedColor : PropTypes.string,
  colors : PropTypes.array.isRequired,
  isFetching : PropTypes.bool.isRequired,
  fetchColors : PropTypes.func.isRequired,
  shuffleColors : PropTypes.func.isRequired,
  isShuffling : PropTypes.bool.isRequired
};

export default ColorChooserPage;