import React from 'react';

const BandMateCard = (props) => {
  const { username, settings: { instruments, genres } } = props;
  return(
    <section className="Bandmate">
      <p className='BandmateName'>{username}</p>
      <p className='BandmateInstrument'>{instruments[0]}</p>
      <span className='BandmateGenre'>
        {genres.map((g, i) => <p key={i} children={g} />)}
      </span>
    </section>
  )
};

export default BandMateCard;
