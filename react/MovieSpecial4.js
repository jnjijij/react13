// MovieSpecial4.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieSpecial4 = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" md="4" lg="3">
          <Card>
            <Link to="/movies/special4">
              <CardImg
                top
                src="https://th.bing.com/th/id/R.3e71aac05397853053eeb5d99cf89fc3?rik=XBqOH9meDxVi0A&riu=http%3a%2f%2ffainekino.at.ua%2fposts%2f5%2f1510171940412892482.jpg&ehk=cLed0RGCnIVMu304x4noB4WCHS4EohV8qU20R5Tjox8%3d&risl=&pid=ImgRaw&r=0"
                alt="Special Movie 4"
              />
            </Link>
            <CardBody>
              <CardTitle>Special Movie 4</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieSpecial4;
