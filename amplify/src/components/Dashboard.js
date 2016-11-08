import React, { Component } from 'react';
import BandMateCard from './BandMateCard';

class Dashboard extends Component {

  render() {
    return (
      <section className='Dashboard'>
        <h1>JamFinder</h1>
        <div className='PotentialBandArea'>
          <span className='PotentialBandHeader'>
            <h3>Potential</h3>
            <h3>BandMates</h3>
          </span>
          <p className="BandmatesTotal">2</p>
        </div>
        <BandMateCard username='Logan Bishop' instrument='Guitar' />
        <BandMateCard username='Austy Austin' instrument='Bass' />
      </section>
    )
  }
}

export default Dashboard;
