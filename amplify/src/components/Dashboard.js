import React, { Component } from 'react';
import BandMateCard from './BandMateCard';
import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/dashboard';

class Dashboard extends Component {

  componentDidMount() {
    const { retrieveBandmates } = this.props;
    retrieveBandmates();
  }

  render() {
    const { dashboard } = this.props;
    const mates = _.map(dashboard, (val, key) => Object.assign({}, val,{id: key}));
    return (
      <section className='Dashboard'>
        <h1>JamFinder</h1>
        <div className='PotentialBandArea'>
          <span className='PotentialBandHeader'>
            <h3>Potential</h3>
            <h3>BandMates</h3>
          </span>
          <p className="BandmatesTotal">{mates.length}</p>
        </div>
        { mates.map((m, i) => <BandMateCard key={i} {...m} />) }
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
