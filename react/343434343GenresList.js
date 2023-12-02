// GenresList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, selectGenres, setSelectedGenre } from '../actions/genreActions';

const GenresList = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleGenreClick = (genre) => {
    dispatch(setSelectedGenre(genre));
  };

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => handleGenreClick(genre)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
