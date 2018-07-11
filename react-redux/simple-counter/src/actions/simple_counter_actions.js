import actionTypes from './types/simple_counter_action_types';

function doIncrement(){
  return {
    type: actionTypes.INCREMENT
  };
}

function doDecrement(){
  return {
    type: actionTypes.DECREMENT
  };
}

function doSetDefault(value){
  return {
    type: actionTypes.SET_DEFAULT,
    payload : {
      value
    }
  };
}

export default {
  doIncrement,
  doDecrement,
  doSetDefault
};