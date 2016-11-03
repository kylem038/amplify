import { connect } from 'react-redux';
import Instruments from '../components/Instruments';

import toggleChecked from '../actions/toggleChecked';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecked() {
      dispatch(toggleChecked());
    }
  };

};

export default connect(null, mapDispatchToProps)(Instruments);
