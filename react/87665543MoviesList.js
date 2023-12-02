// MoviesList.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MoviesListCard from './MoviesListCard';
import MovieSpecial from './MovieSpecial'; // Import the new component

const MoviesList = ({ movies }) => {
  // ... your existing code

  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={movie.id} sm="6" md="4" lg="3">
            <MoviesListCard movie={movie} />
          </Col>
        ))}
        {/* Add MovieSpecial component at the end */}
        <Col sm="6" md="4" lg="3">
          <MovieSpecial />
        </Col>
      </Row>
      {/* ... rest of your code */}
    </Container>
  );
};

export default MoviesList;
