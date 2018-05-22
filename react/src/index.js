import React from 'react';
import ReactDOM from 'react-dom';
import ColorChooserPage from './containers/color_chooser_page_container';

export function init(container){
  ReactDOM.render(<ColorChooserPage/>, document.getElementById(container));
}

