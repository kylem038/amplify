import React from 'react';

const mailTo = (email, name) => {
  return `mailto:${email}?subject=${name}%20would%20like%20to%20join%20your%20band`;
};

const BandMateCard = (props) => {
  const { useremail, username, settings: { instruments, genres } } = props;

  return(
    <a href={mailTo(useremail, username)} className="Bandmate">
      <p className='BandmateName'>{username}</p>
      <span className='BandmateInstrument'>
        {instruments.map((instrument, i) => <p key={i} children={instrument} />)}
      </span>
      <span className='BandmateGenre'>
        {genres.map((genre, i) => <p key={i} children={genre} />)}
      </span>
    </a>
  );
};

export default BandMateCard;
