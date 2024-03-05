import React, { useState, useEffect } from 'react';
import { getTopGenres, getTopTracksByGenre } from './lastfmService.js';
import GenreList from './GenreList.js';

// import electronicMusicImage from './electronicmusic.jpg';
// ISSUES WITH IMAGES
// I can't seem to place this image exactly where I wanted to. 
// lastfm no longer allow you to import images.

const App = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        const topGenres = await getTopGenres();
        setGenres(topGenres);
        // update state with the fetched genres
        setLoading(false);
        // sets the loading state to false
      } catch (error) {
        setError('Could not fetch data');
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchGenresData();
  }, []);



  const handleGenreClick = async (genreName) => {
    try {
      const tracks = await getTopTracksByGenre(genreName);
      setTopTracks(tracks);
      setSelectedGenre(genreName);
    } catch (error) {
      setError('Could not fetch top tracks');
      console.error(error.message);
    }
  };



  const handleBackToGenres = () => {
    // an event handler for going back to genres
    setSelectedGenre(null);
    // resets selected genre to null
    setTopTracks([]);
    // clears the top tracks
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Gina's Music Genre Explorer</h1>
      <h3>Click on a genre to see song suggestions:</h3>
      {selectedGenre ? (
        // above line. if a genre is selected it renders the details for that genre.
        // {selectedGenre ? ... : ...}: This is a ternary conditional rendering. If selectedGenre is true 
        // (a genre is selected), it renders the content inside the first set of parentheses.
        //  If selectedGenre is false (no genre selected), it renders the content inside the second set of parentheses.
        // LOOK INTO THIS MORE.
        <div>
          <h2>{selectedGenre}</h2>
          <button onClick={handleBackToGenres}>Back to Genres</button>
          <h3>Song Recommendations</h3>
          <ul>
            {topTracks.map((track) => (
              <li key={track.name}>{track.name}</li>
              // above two lines maps through the top tracks array showing it as a list.
            ))}
          </ul>
        </div>
      ) : (
        <GenreList genres={genres} onGenreClick={handleGenreClick} />
        // second set of parentheses shows the genre list if no genre is selected. 
      )}
    </div>
  );
};


export default App;


// lines '<button onClick={handleBackToGenres}>Back to Genres</button>' and ' <h3>Song Recommendations</h3>'
// don't show on the screen unless zoomed out- not sure how to correct this. I would prefer it if they were 
// included in the scrolling with the genres. 
// '<h3>Click on a genre to see song suggestions:</h3>' also shows on song rec pages when I don't want it to- not sure why. 