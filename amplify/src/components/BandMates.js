import React, { Component } from 'react';

class BandMates extends Component {
  constructor() {
    super();
    this.state = {
    //  number of matches
    // array of people objects matched
    };
  }

  render() {
    return (
      <section className='BandMates'>
        <h1>JamFinder</h1>
        <p>Potential BandMates</p>
        {/* references API call for # of matches */}
        <ul>
          <li>Logan Bishop</li>
          <li>Guitar</li>
          <li>Blues</li>
          <li>Rock</li>
          {/* show object props here from API call */}
        </ul>
      </section>
    )
  }
}

export default BandMates;
