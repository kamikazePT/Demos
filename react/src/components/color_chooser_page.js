import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButtonListGroup from './color_button_list_group';
import classNames from 'classnames';

class ColorChooserPage extends Component{

  renderButtonListGroup(){
    const { isShuffling } = this.props;

    const colorButtonListClasses = classNames('color-button-list-container', {'is-shuffling' : isShuffling});

    return (
      <div className={colorButtonListClasses}>
        <ColorButtonListGroup {...this.props}/>
      </div>
    );
  }

  renderShuffleButton(){
    const { isShuffling, colors } = this.props;

    const shuffleButtonListClasses = classNames('shuffle-button-container', 
      {'is-shuffling' : isShuffling}, {'is-locked' : colors.length === 0});

    return (
      <div className={shuffleButtonListClasses}>
        <button className="btn btn-shuffle" onClick={this.props.shuffleColors} type="button" disabled={isShuffling || colors.length === 0}>Shuffle All</button>
      </div>
    );
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

    return(
      <div className="color-chooser-page-container">
        <div className="color-panel-container" >
          {this.renderShufflingMessage()}
          {this.renderButtonListGroup()}
        </div>
        {this.renderShuffleButton()}
      </div>
    );
  }
}

ColorChooserPage.defaultProps = {
  colors : [],
  isShuffling : false,
};

ColorChooserPage.propTypes = {
  colors : PropTypes.array.isRequired,
  shuffleColors : PropTypes.func.isRequired,
  isShuffling : PropTypes.bool.isRequired
};

export default ColorChooserPage;