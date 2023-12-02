// MovieSpecial5.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieSpecial5 = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" md="4" lg="3">
          <Card>
            <Link to="/movies/special5">
              <CardImg
                top
                src="https://www.bing.com/th?id=OIP.PnGqwFOXhTBT7rXZnPifwwHaK-&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3e71aac05397853053eeb5d99cf89fc3%3frik%3dXBqOH9meDxVi0A%26riu%3dhttp%253a%252f%252ffainekino.at.ua%252fposts%252f5%252f1510171940412892482.jpg%26ehk%3dcLed0RGCnIVMu304x4noB4WCHS4EohV8qU20R5Tjox8%253d%26risl%3d%26pid%3dImgRaw%26r%3d0"
                alt="Special Movie 5"
              />
            </Link>
            <CardBody>
              <CardTitle>Special Movie 5</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieSpecial5;
