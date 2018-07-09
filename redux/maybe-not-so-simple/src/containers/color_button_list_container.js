import { connect } from 'react-redux';
import ColorButtonList from '../components/color_button_list';
import buttonListActions from '../actions/color_button_list_actions';
import { getColors } from '../selectors/color_button_list_selectors';

const mapStateToProps = state => {
  return {
    colors: getColors(state)
  };
};

export default connect(mapStateToProps, buttonListActions)(ColorButtonList);
