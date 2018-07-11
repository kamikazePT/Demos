import { createStore, combineReducers } from 'redux';
import keypress from 'keypress';
import { devToolsEnhancer } from 'redux-devtools-extension';
import simpleCounterDisplayReducer from './reducers/simple_counter_display_reducer';
import simpleCounterActionMessageReducer from './reducers/simple_counter_action_message_reducer';
import actionCreators from './actions/simple_counter_actions';

const store = createStore(combineReducers({
  counter : simpleCounterDisplayReducer(),
  actions : simpleCounterActionMessageReducer()
}), devToolsEnhancer());

const commands = [
  {
    test : (chunk) => chunk === '+',
    exec : () => store.dispatch(actionCreators.doIncrement())
  },
  {
    test : (chunk) => chunk === '-',
    exec : () => store.dispatch(actionCreators.doDecrement())
  },
  {
    test : (chunk, key) => key && key.ctrl && key.name === 'r',
    exec : () => store.dispatch(actionCreators.doSetDefault(0))
  },
  {
    test : (chunk, key) => key && key.ctrl && key.name === 'c',
    exec : () => process.exit()
  }
];

process.stdout.write(`
  Press "+" to increment\n
  Press "-" to decrement\n
  Press "CTRL + R" to reset counter\n
`);

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress', function (chunk, key) {
  commands.forEach(command => {
    if(command.test(chunk, key)){
      command.exec();

      const state = store.getState();
  
      process.stdout.write(`
        last action was decrement? ${state.actions.wasDecrement}\n
        last action was increment? ${state.actions.wasIncrement}\n
        current value: ${state.counter.value}
      `);
    } 
  });
});