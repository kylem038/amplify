import React, { Component } from 'react';
import MultipleSelect from './MultipleSelect';
import SingleSelect from './SingleSelect';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/settings';

export class Settings extends Component {
  render() {
    const { saveSettings, clearSettings } = this.props;
    return (
      <section className='Settings'>
        <h1>Your Settings</h1>
        <MultipleSelect settingName="instruments" values={['Guitar', 'Bass', 'Vocals', 'Drums']}/>
        <MultipleSelect settingName='genres' values={['Rock', 'Jazz', 'Indie', 'Hip-Hop']}/>
        <SingleSelect settingName='skillLevel' values={['Beginner', 'Experienced', 'Master']}/>
        <button className='SubmitSettings' onClick={e => saveSettings()}>Submit</button>
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
