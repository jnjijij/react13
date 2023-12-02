// MovieListCard.js
import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import StarsRating from './StarsRating';

const MoviesListCard = ({ movie }) => {
  const { id, title, poster_path } = movie;

  return (
    <Card className="movie-card">
      <Link to={`/movies/${id}`}>
        <CardImg top src={`/images/${poster_path}`} alt={title} />
      </Link>
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default MoviesListCard;
