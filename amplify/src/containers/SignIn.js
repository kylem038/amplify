import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';

import * as actions from '../actions/auth';

const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
