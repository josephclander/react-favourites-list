import React from 'react';

const Gig = (props) => {
  const {
    id,
    header,
    imageSrc,
    imageTitle,
    description,
    date,
    time,
    location,
  } = props.data;

  const { handleFavourites } = props;

  const buttonText = props.isFavourite ? 'Un-favourite' : 'Favourite';
  const buttonColour = props.isFavourite ? 'red' : 'green';

  return (
    <li className="gig">
      <h2>{header}</h2>
      <img src={imageSrc} alt={imageTitle} title={imageTitle} />
      <p>Description: {description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <button
        className={buttonColour}
        onClick={() => handleFavourites(id)}
      >
        {buttonText}
      </button>
    </li>
  );
};

export default Gig;
