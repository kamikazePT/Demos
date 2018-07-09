import { createReducer } from 'redux-create-reducer';
import buttonReducer from './color_button_reducer';
import buttonListActionTypes from '../actions/types/color_button_list_action_types';
import buttonActionTypes from '../actions/types/color_button_action_types';

export default function reducer(initialState = {
  colors : [],
  isFetching : false
}) {
  const createdButtonReducer = buttonReducer();

  return createReducer(initialState, {
    [buttonListActionTypes.DO_FETCH_COLORS_START] : doFetchStartHandler,
    [buttonListActionTypes.DO_FETCH_COLORS_SUCCESS] : doFetchSuccessHandler,
    [buttonListActionTypes.DO_SELECT_COLOR] : doSelectColorHandler,
    [buttonActionTypes.DO_TOGGLE_COLOR] : doToggleSelectedColorHandler
  });
  
  
  function doFetchStartHandler(state) {
    return { ...state, isFetching: true };
  }

  function doFetchSuccessHandler(state, { payload }) {
    const { colors } = payload;

    const newColors = colors.map(color => ({...color, ...(createdButtonReducer(undefined, {}))}));

    return { ...state, isFetching: false, colors: newColors };
  }

  function doToggleSelectedColorHandler(state, action) {
    const { index } = action;

    const newColors = [...state.colors].map((color, i) => {
      const isToggled = i === index;

      return {...color, isSelected : isToggled ? !color.isSelected : false};
    });

    return { ...state, colors: newColors };
  }
  
  function doSelectColorHandler(state, { payload }) {
    const { index } = payload;

    const newColors = [...state.colors];
    newColors[index].isSelected = true;

    return { ...state, colors: newColors };
  }
}
