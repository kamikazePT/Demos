import actionTypes from '../actions/types/color_button_action_types';

export const INITIAL_STATE = {
  isSelected : false
};

export default function reducer(initialState = INITIAL_STATE) {
  return (state, action) => {
    const newState = state || initialState;
    switch (action.type){
    case actionTypes.DO_TOGGLE_COLOR : return doToggleColorHandler(newState);
    default : return newState;
    }
  };

  function doToggleColorHandler(state) {
    return { ...state, isSelected: !state.isSelected};
  }
}