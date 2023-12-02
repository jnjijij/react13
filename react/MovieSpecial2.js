// MovieSpecial2.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieSpecial2 = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" md="4" lg="3">
          <Card>
            <Link to="/movies/special2">
              <CardImg
                top
                src="https://traffilm.net/_bd/4/460.jpg"
                alt="Special Movie 2"
              />
            </Link>
            <CardBody>
              <CardTitle>Special Movie 2</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieSpecial2;
