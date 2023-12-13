import './App.css';
import Gigs from './Gigs';
import info from './data.json';
import { useState } from 'react';

export type gigObj = {
  id: number;
  header?: string;
  imageSrc?: string;
  imageTitle?: string;
  description?: string;
  date: string;
  time: string;
  location: string;
};

type InfoType = {
  data: gigObj[];
};

const importedInfo: InfoType = info as InfoType;

function App() {
  const [favourites, setFavourites] = useState<gigObj[]>([]);
  const [gigs, setGigs] = useState<gigObj[]>(importedInfo.data);

  const handleFavourites: (id: number) => void = (id) => {
    setFavourites((prevFavourites) => {
      // see if clicked id already exists in favourites
      const isFavourite = prevFavourites.some((gig) => gig.id === id);
      if (isFavourite) {
        // remove the item from favourites
        return prevFavourites.filter((gig) => gig.id !== id);
      } else {
        // Add the item to favourites and remove from gigs
        const gigToAdd = gigs.find((gig) => gig.id === id);
        if (gigToAdd) {
          setGigs((gigs) => gigs.filter((gig) => gig.id !== id));
          return [...prevFavourites, gigToAdd];
        }
      }

      // Fallback
      return prevFavourites;
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
