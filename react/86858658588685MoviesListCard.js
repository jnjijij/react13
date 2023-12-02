// MoviesListCard.js
import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import StarsRating from './StarsRating'; // Import the StarsRating component

const MoviesListCard = ({ movie }) => {
  const { title, poster_path, rating } = movie;

  return (
    <Card className="movie-card">
      <CardImg top src={poster_path} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <div className="movie-info">
          <StarsRating rating={rating} />
        </div>
      </CardBody>
    </Card>
  );
};

export default MoviesListCard;
