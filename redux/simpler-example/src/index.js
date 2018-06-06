import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { storeBuilder  } from 'bsimprimir-core-utils';
import ColorChooserPage from './components/color_chooser_page';
import colorButtonListReducer from './reducers/color_button_list_reducer';
import colorShuffleReducer from './reducers/color_shuffle_reducer';
import '../assets/index.less';

const { configureStore,  thunkMiddleware } = storeBuilder;

export function init(container){
  const store = configureStore(combineReducers({
    buttonList : colorButtonListReducer(),
    shuffleButton : colorShuffleReducer()
  }), thunkMiddleware());

  ReactDOM.render(
    <Provider store={store}>
      <ColorChooserPage/>
    </Provider>, document.getElementById(container)
  );
}

