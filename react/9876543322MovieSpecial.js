// MovieSpecial.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieSpecial = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" md="4" lg="3">
          <Card>
            <Link to="/movies/special">
              <CardImg
                top
                src="https://cdn5.amcn.in/a/proekt8gklas.alle.bg/assets/01a8d3fb953d-w600-c999999999-vb420035d9c/ie4ez4jg0q87fga1chlbz3h.jpeg"
                alt="Special Movie"
              />
            </Link>
            <CardBody>
              <CardTitle>Special Movie</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieSpecial;
