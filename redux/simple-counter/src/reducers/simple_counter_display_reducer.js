import actionTypes from '../actions/types/simple_counter_action_types';

export default function reducer(initialState = {}) {
  return (state, action) => {
    console.log(`display reducer called with current state : ${JSON.stringify(state)} and action : ${JSON.stringify(action)}`);
    const newState = state || initialState;
    switch (action.type){
    case actionTypes.INCREMENT : return onIncrementHandler(newState);
    case actionTypes.DECREMENT : return onDecrementHandler(newState);
    case actionTypes.SET_DEFAULT : return onSetDefaultHandler(newState, action);
    default : return newState;
    }
  };

  function onIncrementHandler(state) {
    console.log('display reducer handled increment');
    return { ...state, value : state.value + 1};
  }

  function onDecrementHandler(state) {
    console.log('display reducer handled decrement');
    return { ...state, value : state.value - 1};
  }

  function onSetDefaultHandler(state, { payload }) {
    console.log('display reducer handled default value');
    return { ...state, value : payload.value};
  }
}