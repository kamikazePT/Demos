import { createReducer } from 'redux-create-reducer';
import buttonReducer from './color_button_reducer';
import actionTypes from '../actions/types/color_button_list_action_types';

export default function reducer(initialState) {
  const createdBbuttonListReducer = buttonListReducer(initialState);
  const createdButtonReducer = buttonReducer(initialState);
  return (state, action) => createdButtonReducer(createdBbuttonListReducer(state, action), action);
}

function buttonListReducer(initialState = {
  isFetching : false,
  colors : []
}){
  return createReducer(initialState, {
    [actionTypes.DO_FETCH_COLORS_START] : doFetchStartHandler,
    [actionTypes.DO_FETCH_COLORS_SUCCESS] : doFetchSuccessHandler
  });
}

function doFetchStartHandler(state) {
  return { ...state, isFetching: true };
}

function doFetchSuccessHandler(state, { payload }) {
  const { colors } = payload;

  return { ...state, isFetching: false, colors: colors };
}