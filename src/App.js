import React, { useState, useEffect } from 'react';
import { getTopGenres } from './lastfmService.js';
import GenreList from './GenreList.js';


const initialGenres = [
  { name: 'rock', image: 'allmusicpics/queen.jpg' },
  { name: 'electronic', image: 'allmusicpics/electronicmusic.jpg'},
];



const App = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGenres = async () => {
    try {
      const topGenres = await getTopGenres();
      setGenres(topGenres);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch data');
      console.error(error.message);
      setLoading(false);
    }
  };

  const handleGenreClick = (genreName) => {
    setSelectedGenre(genreName);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Gina's Music Genre Explorer</h1>
      {selectedGenre ? (
        <div>
          <h2>{selectedGenre}</h2>
          <button onClick={() => setSelectedGenre(null)}>Back to Genres</button>
        </div>
      ) : (
        <GenreList genres={genres} onGenreClick={handleGenreClick} />
      )}
    </div>
  );
};

export default App;