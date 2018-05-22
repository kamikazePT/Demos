import React, { Component } from 'react';
import ColorChooserPage from '../components/color_chooser_page';
import shuffle from 'shuffle-array';

const ONE_SECOND = 1000;
const HALF_SECOND = ONE_SECOND / 2;

class ColorChooserPageContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedColor : null,
      colors : [],
      isFetching : false,
      isShuffling : false
    };
  }

  /**
   * Simulating an http request to fetch colors
   */
  _fetchColors = () => {
    this.setState({
      isFetching : true
    }, () => setTimeout(() => {
      this.setState({
        isFetching : false,
        colors : [
          {
            value : '#FF0000',
            label : 'Red'
          },
          {
            value : '#00FF00',
            label : 'Green'
          },
          {
            value : '#0000FF',
            label : 'Blue'
          },
          {
            value : '#FFFF00',
            label : 'Yellow'
          }
        ]
      });
    }, ONE_SECOND));
  }


  _shuffleColors = () => {
    this.setState({
      isShuffling : true,
      selectedColor : null
    }, () => setTimeout(() => {
      this.setState({
        isShuffling : false,
        colors : shuffle([...this.state.colors]),
        selectedColor : this.state.colors[Math.floor(Math.random() * this.state.colors.length)].value
      });
    }, HALF_SECOND));
  }

  _doSelectColor = (color) => {
    this.setState({
      selectedColor : this.state.selectedColor === color ? null : color
    });
  }

  render(){
    return(
      <ColorChooserPage {...this.state} 
        doSelectColor={this._doSelectColor} 
        shuffleColors={this._shuffleColors} 
        fetchColors={this._fetchColors}
      />
    );
  }
}

export default ColorChooserPageContainer;