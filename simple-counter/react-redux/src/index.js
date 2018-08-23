import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import SimpleCounterPage from './components/simple_counter_page';
import simpleCounterDisplayReducer from './reducers/simple_counter_display_reducer';
import simpleCounterActionMessageReducer from './reducers/simple_counter_action_message_reducer';

export function init(container){
  const store = createStore(combineReducers({
    counter : simpleCounterDisplayReducer(),
    actions : simpleCounterActionMessageReducer()
  }), devToolsEnhancer());

  ReactDOM.render(
    <Provider store={store}>
      <SimpleCounterPage/>
    </Provider>, document.getElementById(container));
}

