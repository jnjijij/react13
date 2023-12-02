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
      <img src={movie.poster_path} alt={movie.title} style={{ maxWidth: '300px' }} />
      <div>
        <h3>Your Rating:</h3>
        <StarsRating rating={rating} onChange={handleRatingChange} />
      </div>
      <div>
        <h3>Your Comment:</h3>
        <textarea rows="4" cols="50" value={comment} onChange={handleCommentChange} />
      </div>
      <button onClick={() => alert(`Rating: ${rating}, Comment: ${comment}`)}>
        Submit Rating and Comment
      </button>
      <div>
        <Link to="/">Back to Movies List</Link>
      </div>
      <div>
        <h3>Viewer Ratings:</h3>
        <StarsRating rating={3} />
        {/* Replace '3' with the actual average rating for the movie */}
      </div>
      <img src={`/images/poster_another_movie.jpg`} alt="Another Movie Poster" style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default MovieDetail;
