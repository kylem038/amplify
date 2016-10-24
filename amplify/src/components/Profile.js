import React from 'react';

const Profile = () => {
  return (
    <section className='ProfilePage'>
      <h1>Logan Bishop</h1>
      {/* Facebook profile image here */}
      <section className='ProfileInfo'>
        {/* populate lists from API data */}
        <p>Instruments</p>
        <ul>
          <li>Guitar</li>
          <li>Guitar</li>
        </ul>
        <p>Genres</p>
        <ul>
          <li>Blues</li>
          <li>Rock</li>
        </ul>
      </section>
    <button className='ConnectButton'>Connect wtih Logan Bishop!</button>
    <button className='CancelButton'>Cancel</button>
    </section>
  );
};

export default Profile;
