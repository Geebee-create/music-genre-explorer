import React from 'react';
import './App.css';

const GenreList = ({ genres, onGenreClick }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll' }}>
      {genres.map((genre) => (
        <div key={genre.name} onClick={() => onGenreClick(genre.name)} style={{ marginRight: '15px', textAlign: 'center' }}>
          <p style={{ margin: '5px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GenreList;