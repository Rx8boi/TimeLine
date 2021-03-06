import React from "react";
import Developer from "../components/lottie/Developer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>About Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              magni quas maiores sapiente eos soluta voluptatibus nobis
              perspiciatis omnis debitis necessitatibus corrupti, expedita illo
              hic dolorum quia atque. Impedit, praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              magni quas maiores sapiente eos soluta voluptatibus nobis
              perspiciatis omnis debitis necessitatibus corrupti, expedita illo
              hic dolorum quia atque. Impedit, praesentium. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Pariatur magni quas maiores
              sapiente eos soluta voluptatibus nobis perspiciatis omnis debitis
              necessitatibus corrupti, expedita illo hic dolorum quia atque.
              Impedit, praesentium.
            </p>
          </Col>
          <Col>
            <Developer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
