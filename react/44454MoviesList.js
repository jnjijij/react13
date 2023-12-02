// MoviesList.js
import React from 'react';
import MoviesListCard from './MoviesListCard';
import moviesData from '../data/moviesData'; // Import the moviesData array

const MoviesList = () => {
  return (
    <div>
      <h2>Movies List</h2>
      <div className="movies-list">
        {moviesData.map((movie) => (
          <MoviesListCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
