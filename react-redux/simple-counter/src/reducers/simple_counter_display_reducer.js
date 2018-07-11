import actionTypes from '../actions/types/simple_counter_action_types';

export default function reducer(initialState = {}) {
  return (state, action) => {
    const newState = state || initialState;
    switch (action.type){
    case actionTypes.INCREMENT : return onIncrementHandler(newState);
    case actionTypes.DECREMENT : return onDecrementHandler(newState);
    case actionTypes.SET_DEFAULT : return onSetDefaultHandler(newState, action);
    default : return newState;
    }
  };

  function onIncrementHandler(state) {
    return { ...state, value : state.value + 1};
  }

  function onDecrementHandler(state) {
    return { ...state, value : state.value - 1};
  }

  function onSetDefaultHandler(state, { payload }) {
    return { ...state, value : payload.value};
  }
}