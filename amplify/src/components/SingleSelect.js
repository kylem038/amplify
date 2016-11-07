import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/settings';

export class SingleSelect extends Component {
  toggleSetting(e) {
    const { addSingleSettingValue, settingName } = this.props;
    if (e.currentTarget.checked) {
      addSingleSettingValue(settingName, e.currentTarget.value);
    } 
  }

  render() {
    const {settingName, values, settings} = this.props;
    return(
      <section className='SingleSelect'>
        <p>{settingName}</p>
        { values.map((valueName) => {
          return (
            <label for={valueName} key={valueName}>
              <input
                type='radio'
                checked={settings[settingName].includes(valueName)}
                value={valueName}
                onChange={e => this.toggleSetting(e)}
              /> {valueName}
            </label>
          )
        })
        }
      </section>
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSelect);
