import React, { Component, Fragment } from 'react';
import ColorButton from './color_button';
import PropTypes from 'prop-types';

class ColorButtonList extends Component{
  componentDidMount(){
    this.props.fetchColors();
  }

  renderFetchingMessage(){
    const { isFetching } = this.props.colors;

    if(isFetching){
      return (
        <div className="alert-info-container">
          <span className="alert-info">Fetching</span>
        </div>
      );
    }
  }

  onColorClick = (color) => {
    return () => this.props.doSelectColor(color);
  }

  render(){
    const { colors } = this.props;
    return(
      <Fragment>
        {
          this.renderFetchingMessage() || 
          colors.items.map((color, i) => (
            <ColorButton key={i} color={color} onClick={this.onColorClick(color)} isSelected={color.value === colors.selectedColor}/>
          ))
        }
      </Fragment>
    );
  }
}

ColorButtonList.propTypes = {
  colors : PropTypes.shape({
    items : PropTypes.arrayOf(PropTypes.shape({
      value : PropTypes.string.isRequired
    })).isRequired,
    selectedColor : PropTypes.string,
    isFetching : PropTypes.bool
  }).isRequired,
  fetchColors : PropTypes.func.isRequired,
  doSelectColor : PropTypes.func.isRequired
};

export default ColorButtonList;