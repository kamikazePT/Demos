import React, { Component } from 'react';
import ColorChooserPage from '../components/color_chooser_page';
import shuffle from 'shuffle-array';

const ONE_SECOND = 1000;
const HALF_SECOND = ONE_SECOND / 2;

class ColorChooserPageContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors : [],
      isShuffling : false
    };
  }

  addColorGroup = () => {
    if(this.state.isShuffling) return;

    const colors = [...this.state.colors];
    colors.push({
      items: []
    });
    this.setState({
      colors : colors
    });
  }

  deleteColorGroup = (i) => {
    if(this.state.isShuffling) return;
    
    const colors = [...this.state.colors];
    colors.splice(i, 1);
    this.setState({
      colors : colors
    });
  }
 
  fetchColors = (i) => {
    const newColorList = {...this.state.colors[i]};
    newColorList.isFetching = true;
    const colors = [...this.state.colors];
    colors[i] = newColorList;
    this.setState({
      colors : colors
    }, () => 
      setTimeout(() => {
        const newColors = [...this.state.colors];
        newColors[i] = {
          items :[
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
          ],
          isFetching : false
        };
        this.setState({
          colors : newColors
        });
      }, ONE_SECOND)
    );
  }


  shuffleColors = () => {
    const { isShuffling, colors } = this.state;
    if(isShuffling) return;

    const newColors = [...colors].map(color => { color.selectedColor = null; return color; });

    this.setState({
      isShuffling : true,
      colors : newColors
    }, () => 
      setTimeout(() => {
        const newColors = [...this.state.colors].map(color => 
        {
          color.items = shuffle(color.items);
          color.selectedColor = color.items[Math.floor(Math.random() * color.items.length)].value; 
          return color;
        });

        this.setState({
          isShuffling : false,
          colors : newColors
        });
      }, HALF_SECOND)
    );
  }

  doSelectColor = (i, selectedColor) => {
    const newColors = [...this.state.colors];
    newColors[i].selectedColor = newColors[i].selectedColor !== selectedColor ? selectedColor : null;

    this.setState({
      colors : newColors
    });
  }

  render(){
    return(
      <ColorChooserPage {...this.state} 
        deleteColorGroup={this.deleteColorGroup}
        addColorGroup={this.addColorGroup}
        doSelectColor={this.doSelectColor} 
        shuffleColors={this.shuffleColors} 
        fetchColors={this.fetchColors}
      />
    );
  }
}

export default ColorChooserPageContainer;