import actionTypes from './types/color_button_list_action_types';
import * as TIME from '../domain/times';

export default dispatch => ({
  doFetchColors : doFetchColors(dispatch)
});

function doFetchColors(dispatch) {
  return () => {
    dispatch(doFetchColorsStart());

    setTimeout(() => dispatch(doFetchColorsSusccess([
      {
        value : '#FF0000',
        label : 'Red'
      },
      {
        value : '#00FF00',
        label : 'Green'
      },
      {
        value : '#0000FF',
        label : 'Blue'
      },
      {
        value : '#FFFF00',
        label : 'Yellow'
      }
    ])), TIME.ONE_SECOND);
  };

  function doFetchColorsStart(){
    return {
      type: actionTypes.DO_FETCH_COLORS_START
    };
  }

  function doFetchColorsSusccess(colors){
    return {
      type: actionTypes.DO_FETCH_COLORS_SUCCESS,
      payload: { colors }
    };
  }
}

