import React from 'react';
import Gig, { GigProps } from './Gig';

export type GigsProps = {
  gigs: GigProps['data'][];
  handleFavourites: GigProps['handleFavourites'];
  className: string;
  isFavourite: boolean;
};

const Gigs: React.FC<GigsProps> = ({
  gigs,
  handleFavourites,
  className,
  isFavourite,
}) => {
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
