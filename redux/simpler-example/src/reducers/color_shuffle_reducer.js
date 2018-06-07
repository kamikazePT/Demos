import { createReducer } from 'redux-create-reducer';
import actionTypes from '../actions/types/color_shuffle_action_types';

export default function reducer(initialState = {isShuffling : false}) {
  return createReducer(initialState, {
    [actionTypes.DO_SHUFFLE_COLORS_START] : doShuffleStartHandler,
    [actionTypes.DO_SHUFFLE_COLORS_SUCCESS] : doShuffleSuccessHandler
  });

  function doShuffleStartHandler(state) {
    return { ...state, isShuffling: true };
  }
  
  function doShuffleSuccessHandler(state) {
    return { ...state, isShuffling: false };
  }
}
