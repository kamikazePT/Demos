import React, { Component, Fragment } from 'react';
import ColorButtonList from './color_button_list';
import PropTypes from 'prop-types';

class ColorButtonListGroup extends Component{
  doSelectColor = (i) => {
    return (color) => this.props.doSelectColor(i, color.value);
  }

  onFetchColors = (i) => {
    return () => this.props.fetchColors(i);
  }

  doDeleteColorGroup = (i) => {
    return () => this.props.deleteColorGroup(i);
  }

  render(){
    const { colors } = this.props;

    return(
      <Fragment>
        {colors.map((innerColors, i) => {
          const pageStyles = innerColors.selectedColor ? { backgroundColor : innerColors.selectedColor } : {};

          return (
            <Fragment key={i}> 
              <div className="color-button-list-group-container" style={pageStyles}>   
                <ColorButtonList 
                  doSelectColor={this.doSelectColor(i)}
                  fetchColors={this.onFetchColors(i)}
                  colors={innerColors}
                />
              </div>
              <button className="btn btn-remove" onClick={this.doDeleteColorGroup(i)} type="button">Remove Group</button>
            </Fragment>
          );
        })}
        <button className="btn btn-add" onClick={this.props.addColorGroup} type="button">Add Group</button>
      </Fragment>
    );
  }
}

ColorButtonListGroup.propTypes = {
  colors : PropTypes.array.isRequired,
  doSelectColor : PropTypes.func.isRequired,
  fetchColors : PropTypes.func.isRequired,
  deleteColorGroup : PropTypes.func.isRequired,
  addColorGroup : PropTypes.func.isRequired
};

export default ColorButtonListGroup;