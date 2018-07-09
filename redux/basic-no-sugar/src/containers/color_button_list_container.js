import { connect } from 'react-redux';
import ColorButtonList from '../components/color_button_list';
import { getColors } from '../selectors/color_button_list_selectors';

const mapStateToProps = state => {
  return {
    colors: getColors(state)
  };
};

export default connect(mapStateToProps)(ColorButtonList);
