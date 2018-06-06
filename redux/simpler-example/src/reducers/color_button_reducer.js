import { createReducer } from 'redux-create-reducer';
import actionTypes from '../actions/types/color_button_action_types';

export default function reducer(initialState = { selectedColor : null }) {
  return createReducer(initialState, {
    [actionTypes.DO_SELECT_COLOR] : doSelectColorHandler
  });
}

function doSelectColorHandler(state, { payload }) {
  const { color } = payload;

  return { ...state, selectedColor: state.selectedColor === color ? null : color };
}