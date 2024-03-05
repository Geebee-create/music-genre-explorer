import React from 'react';
import './App.css';


const GenreList = ({ genres, onGenreClick }) => {
  return (
    <div className="genre-list-container">
      {genres.map((genre) => (
        // mapping through the genres.
        // the two lines of code below create a div for each genre with a unique key based on the genre name. 
        // Also sets up an onClick event handler to call the onGenreClick function with the genre name when clicked.
        <div key={genre.name} onClick={() => onGenreClick(genre.name)} className="genre-item">
          <p className="genre-name">{genre.name}</p>
        </div>
      ))}
    </div>
  );
};


export default GenreList;