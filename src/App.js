import React, { useState, useEffect } from 'react';
import { getTopGenres } from './lastfmService.js';

const App = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGenres = async () => {
    try {
      const topGenres = await getTopGenres();
      // should above line have await fetch and the API website link? .Look again at what we did earlier. Or maybe I am just importing that above?
      setGenres(topGenres);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch data');
      console.error(error.message);
      setLoading(false);
      // i might need a console.log fetch() too? or something similar? COMPARE.
    }
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
      <ul>
        {genres.map((genre) => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>
      <button onClick={fetchGenres}>Refresh Genres</button>
    </div>
  );
};

export default App;