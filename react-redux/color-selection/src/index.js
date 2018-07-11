import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ColorChooserPage from './components/color_chooser_page';
import colorButtonListReducer from './reducers/color_button_list_reducer';
import '../assets/index.less';

const oldVersionDevTools = window.devToolsExtension && window.devToolsExtension();
const newVersionDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function init(container){
  const store = createStore(colorButtonListReducer(), oldVersionDevTools || newVersionDevTools);

  ReactDOM.render(
    <Provider store={store}>
      <ColorChooserPage/>
    </Provider>, document.getElementById(container)
  );
}

