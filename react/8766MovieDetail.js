// MovieDetail.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarsRating from './StarsRating';
import moviesData from '../data/moviesData';

const MovieDetail = () => {
  const { movieId } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(movieId, 10));
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to="/">
        <img src={movie.poster_path} alt={movie.title} style={{ maxWidth: '300px' }} />
      </Link>
      {/* rest of the component */}
      <div>
        <Link to="/">Back to Movies List</Link>
      </div>
      {/* rest of the component */}
    </div>
  );
};

export default MovieDetail;
