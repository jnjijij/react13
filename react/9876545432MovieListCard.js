// MovieListCard.js
import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import StarsRating from './StarsRating';

const MoviesListCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <Card className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <CardImg top src={`/images/${poster_path}`} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
};

export default MoviesListCard;
