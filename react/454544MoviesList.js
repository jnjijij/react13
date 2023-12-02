// MoviesList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies } from '../reducers/moviesSlice';
import MoviesListCard from './MoviesListCard';
import { selectSelectedGenre } from '../reducers/genresSlice';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const selectedGenre = useSelector(selectSelectedGenre);

  useEffect(() => {
    dispatch(fetchMovies(selectedGenre)); // Pass selectedGenre to fetchMovies
  }, [dispatch, selectedGenre]);

  return (
    <div>
      <h2>Movies List</h2>
      <div className="movies-list">
        {movies.map((movie) => (
          <MoviesListCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
