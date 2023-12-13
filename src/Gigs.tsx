import React from 'react';
import Gig from './Gig';

const Gigs = (props) => {
  const { gigs, handleFavourites, className, isFavourite } = props;

  return (
    <ul className={`gigs ${className}`}>
      {gigs.map((gig) => (
        <Gig
          key={gig.id}
          data={gig}
          handleFavourites={handleFavourites}
          isFavourite={isFavourite}
        />
      ))}
    </ul>
  );
};

export default Gigs;
