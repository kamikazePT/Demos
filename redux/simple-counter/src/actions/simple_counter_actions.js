import actionTypes from './types/simple_counter_action_types';

function doIncrement(){
  console.log('increment action created');
  return {
    type: actionTypes.INCREMENT
  };
}

function doDecrement(){
  console.log('decrement action created');
  return {
    type: actionTypes.DECREMENT
  };
}

function doSetDefault(value){
  console.log(`set default action created with value : ${value}`);
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