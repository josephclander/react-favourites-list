import './App.css';
import Gigs from './Gigs';
import info from './data.json';
import { useState } from 'react';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [gigs, setGigs] = useState(info.data);

  const handleFavourites = (id) => {
    setFavourites((prevState) => {
      // Check if the gig is already in favourites
      if (prevState.find((gig) => gig.id === id)) {
        // If it is, remove it from favourites
        return prevState.filter((gig) => gig.id !== id);
      } else {
        // Otherwise, add it to favourites
        const newFavourite = gigs.find((gig) => gig.id === id);
        if (newFavourite) {
          // Remove the gig from the main list
          setGigs(gigs.filter((gig) => gig.id !== id));
          // Add the gig to favourites
          return [...prevState, newFavourite];
        }
        return prevState;
      }
    });
  };

  return (
    <main>
      <h1>Gigs</h1>
      <div className="container">
        <h2>Favourites</h2>
        <Gigs
          className="favourite"
          gigs={favourites}
          handleFavourites={handleFavourites}
          isFavourite={true}
        />
      </div>
      <div className="container">
        <h2>Main</h2>
        <Gigs
          className="regular"
          gigs={gigs}
          handleFavourites={handleFavourites}
          isFavourite={false}
        />
      </div>
    </main>
  );
}

export default App;
