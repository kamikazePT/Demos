import buttonReducer, { INITIAL_STATE } from './color_button_reducer';
import buttonListActionTypes from '../actions/types/color_button_list_action_types';
import buttonActionTypes from '../actions/types/color_button_action_types';

export default function reducer(initialState = {
  colors : [],
  isFetching : false
}) {
  const createdButtonReducer = buttonReducer();

  return (state, action) => {
    const newState = state || initialState;

    switch (action.type){
    case buttonListActionTypes.DO_FETCH_COLORS_START : return doFetchStartHandler(newState);
    case buttonListActionTypes.DO_FETCH_COLORS_SUCCESS : return doFetchSuccessHandler(newState, action);
    case buttonActionTypes.DO_TOGGLE_COLOR : return doToggleSelectedColorHandler(newState, action);
    default : return newState;
    }
  };
  
  function doFetchStartHandler(state) {
    return { ...state, isFetching: true };
  }

  function doFetchSuccessHandler(state, { payload }) {
    const { colors } = payload;

    const newColors = colors.map(color => (createdButtonReducer({...INITIAL_STATE, ...color}, {})));

    return { ...state, isFetching: false, colors: newColors };
  }

  function doToggleSelectedColorHandler(state, action) {
    const { index } = action.payload;

    const newColors = [...state.colors].map((color, i) => {
      const isClickedButton = i === index;
      const isSelected = color.isSelected;

      return (isClickedButton || isSelected) ? createdButtonReducer(state.colors[i], action) : {...color};
    });

    return { ...state, colors: newColors };
  }
 
}
