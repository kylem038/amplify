import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/settings';

export class MultipleSelect extends Component {
  toggleSetting(e) {
    const { addSettingValue, removeSettingValue, settingName } = this.props;
    if(e.currentTarget.checked) {
      addSettingValue(settingName, e.currentTarget.value);
    } else {
      removeSettingValue(settingName, e.currentTarget.value);
    }
  }

  render() {
    const {settingName, values, settings } = this.props;
    return(
      <section className='MultipleSelect'>
        <p>{settingName}</p>
          { values.map((valueName) => {
            return (
              <label key={valueName}>
                <input
                  type="checkbox"
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(MultipleSelect);
