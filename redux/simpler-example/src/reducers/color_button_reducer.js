import { createReducer } from 'redux-create-reducer';
import actionTypes from '../actions/types/color_button_action_types';

export default function reducer(initialState = { isSelected : false }) {
  return createReducer(initialState, {
    [actionTypes.DO_TOGGLE_COLOR] : doToggleColorHandler
  });
}

function doToggleColorHandler(state) {
  return { ...state, isSelected: !state.isSelected};
}