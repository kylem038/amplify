import React, { Component } from 'react';

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
        {/* references API call for # of matches */}
        <ul className="Bandmate">
          <li className='BandmateName'>Logan Bishop</li>
          <li className='BandmateInstrument'>Guitar</li>
          <span className='BandmateGenre'>
          <li>Blues</li>
          <li>Rock</li>
          </span>
        </ul>
        <ul className="Bandmate">
          <li className='BandmateName'>Austy Austin</li>
          <li className='BandmateInstrument'>Bass</li>
          <span className='BandmateGenre'>
          <li>Blues</li>
          <li>Rock</li>
          </span>
        </ul>
      </section>
    )
  }
}

export default Dashboard;
