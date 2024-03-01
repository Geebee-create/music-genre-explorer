import React from 'react';

const GenreList = ({ genres }) => {
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.name}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;