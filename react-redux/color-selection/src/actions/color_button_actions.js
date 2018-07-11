import actionTypes from './types/color_button_action_types';

export default {
  doToggleColor
};

function doToggleColor(index) {
  return {
    type: actionTypes.DO_TOGGLE_COLOR,
    payload: { index }
  };
}