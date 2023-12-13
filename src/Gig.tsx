import React from 'react';

export type GigProps = {
  data: {
    id: number;
    header?: string;
    imageSrc?: string;
    imageTitle?: string;
    description?: string;
    date: string;
    time: string;
    location: string;
  };
  isFavourite: boolean;
  handleFavourites: (id: number) => void;
};

const Gig: React.FC<GigProps> = ({ data, handleFavourites, isFavourite }) => {
  const {
    id,
    header = 'No Name',
    imageSrc, // short-circuit check in render
    imageTitle = '',
    description = '',
    date,
    time,
    location,
  } = data;
  const buttonText = isFavourite ? 'Un-favourite' : 'Favourite';
  const buttonColour = isFavourite ? 'red' : 'green';

  return (
    <li className="gig">
      <h2>{header}</h2>
      {imageSrc && <img src={imageSrc} alt={imageTitle} title={imageTitle} />}
      <p>Description: {description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <button className={buttonColour} onClick={() => handleFavourites(id)}>
        {buttonText}
      </button>
    </li>
  );
};

export default Gig;
