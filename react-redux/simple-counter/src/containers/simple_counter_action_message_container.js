import { connect } from 'react-redux';
import SimpleCounterActionMessage from '../components/simple_counter_action_message';
import { wasIncremented, wasDecremented } from '../selectors/simple_counter_action_message_selectors';

const mapStateToProps = state => {
  return {
    wasIncremented : wasIncremented(state),
    wasDecremented : wasDecremented(state)
  };
};

export default connect(mapStateToProps)(SimpleCounterActionMessage);