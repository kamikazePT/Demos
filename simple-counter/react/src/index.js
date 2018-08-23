import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounterPage from './containers/simple_counter_page_container';

export function init(container){
  ReactDOM.render(<SimpleCounterPage/>, document.getElementById(container));
}

