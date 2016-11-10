import React, { Component } from 'react';
import MultipleSelect from './MultipleSelect';
import SingleSelect from './SingleSelect';
import SignOut from '../containers/SignOut';
const firebase = require('firebase');

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/settings';

export class Settings extends Component {

  saveSettings() {
    const { auth, settings } = this.props;
      const userSettings = {
        useremail: auth.useremail,
        username: auth.username,
        settings: settings
      };
      const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}`);
      reference.set(userSettings);
  }

  render() {
    const { clearSettings } = this.props;
    return (
      <section className='Settings'>
        <SignOut />
        <h1>Your Settings</h1>
        <MultipleSelect settingName="instruments" values={['Guitar', 'Bass', 'Vocals', 'Drums']}/>
        <MultipleSelect settingName='genres' values={['Rock', 'Jazz', 'Indie', 'Hip-Hop']}/>
        <SingleSelect settingName='skillLevel' values={['Beginner', 'Experienced', 'Master']}/>
        <button className='SubmitSettings' onClick={e => this.saveSettings()}>Submit</button>
        <button className='CancelSettings' onClick={e => clearSettings()}>Clear Settings</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
