// MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MoviesListCard from './MoviesListCard';
import moviesData from '../data/moviesData';

const MoviesList = () => {
  return (
    <div>
      <h2>Movies List</h2>
      <div className="movies-list">
        {moviesData.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MoviesListCard movie={movie} />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
