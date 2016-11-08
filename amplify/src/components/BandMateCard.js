import React from 'react';

const BandMateCard = (props) => {
  const { username, instrument } = props;
  return(
    <section className="Bandmate">
      <p className='BandmateName'>{username}</p>
      <p className='BandmateInstrument'>{instrument}</p>
      <span className='BandmateGenre'>
        <p>Blues</p>
        <p>Rock</p>
      </span>
    </section>
  )
};

export default BandMateCard;
