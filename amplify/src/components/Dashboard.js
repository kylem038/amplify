import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
    //  number of matches
    // array of people objects matched
    };
  }

  render() {
    return (
      <section className='Dashboard'>
        <h1>JamFinder</h1>
        <p>Potential BandMates</p>
        {/* references API call for # of matches */}
        <ul className="Bandmate">
          <li className='BandmateName'>Logan Bishop</li>
          <li className='BandmateInstrument'>Guitar</li>
          <li className='BandmateGenre'>Blues</li>
          <li className='BandmateGenre'>Rock</li>
          {/* show object props here from API call */}
        </ul>
      </section>
    )
  }
}

export default Dashboard;



{/* <section className="bandmate">
  <div className="name">
    <p className="bandName">Joe Schmo</p>
  </div>

  <div className="instruments">

  </div>

  <div className="genres">

  </div>
</section> */}
