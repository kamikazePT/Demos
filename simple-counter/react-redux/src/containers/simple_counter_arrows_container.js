import { connect } from 'react-redux';
import SimpleCounterArrows from '../components/simple_counter_arrows';
import actionCreators from '../actions/simple_counter_actions';
const { doIncrement, doDecrement } = actionCreators;

export default connect(null, {
  onIncrementClick : doIncrement,
  onDecrementClick : doDecrement
})(SimpleCounterArrows);