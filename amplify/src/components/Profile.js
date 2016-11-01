import React from 'react';
import { Link } from 'react-router';

const Profile = () => {
  return (
    <section className='ProfilePage'>
      <h1 className='MusicianName'>Logan Bishop</h1>
      <div className='MusicianImage'></div>
      {/* Facebook profile image here */}
      <section className='ProfileInfo'>
        {/* populate lists from API data */}
        <span className='ProfileInstrumentsList'>
          <p>Instruments</p>
          <ul >
            <li>Guitar</li>
            <li>Vocals</li>
          </ul>
        </span>
        <span className='ProfileGenresList'>
          <p>Genres</p>
          <ul>
            <li>Blues</li>
            <li>Rock</li>
          </ul>
        </span>
      </section>
    <button className='ConnectButton'>Connect with Logan Bishop!</button>
    <button className='CancelSettings'><Link to='/dashboard' className='CancelButtonLink'>Cancel</Link></button>
    </section>
  );
};

export default Profile;
