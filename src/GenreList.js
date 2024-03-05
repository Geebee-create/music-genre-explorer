import React from 'react';
import './App.css';

const GenreList = ({ genres, onGenreClick }) => {
  return (
    <div className="genre-list-container">
        {genres.map((genre) => (
          <div key={genre.name} onClick={() => onGenreClick(genre.name)} className="genre-item">
            <p className="genre-name">{genre.name}</p>
          </div>
        ))}
      </div>
  );
};

export default GenreList;