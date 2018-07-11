import actionTypes from '../actions/types/simple_counter_action_types';

export const INITIAL_STATE = {
  wasDecremented : false,
  wasIncremented : false
};

export default function reducer(initialState) {
  const finalInitialState = {...INITIAL_STATE, ...initialState};

  return (state, action) => {
    const newState = state || finalInitialState;
    switch (action.type){
    case actionTypes.INCREMENT : return onIncrementHandler(newState);
    case actionTypes.DECREMENT : return onDecrementHandler(newState);
    default : return newState;
    }
  };

  function onIncrementHandler(state) {
    return { ...state, wasIncremented: true, wasDecremented : false};
  }

  function onDecrementHandler(state) {
    return { ...state, wasIncremented: false, wasDecremented : true};
  }
}