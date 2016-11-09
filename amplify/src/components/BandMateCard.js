import React from 'react';

const BandMateCard = (props) => {
  const { username, settings: { instruments, genres } } = props;
  return(
    <section className="Bandmate">
      <p className='BandmateName'>{username}</p>
      <span className='BandmateInstrument'>
        {instruments.map((instrument, i) => <p key={i} children={instrument} />)}
      </span>
      <span className='BandmateGenre'>
        {genres.map((g, i) => <p key={i} children={g} />)}
      </span>
    </section>
  )
};

export default BandMateCard;
