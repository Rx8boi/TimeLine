import React from "react";
import Thinker from "../components/lottie/Thinker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Thinker />
          </Col>
          <Col>
            <h1>Intro</h1>
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
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              magni quas maiores sapiente eos soluta voluptatibus nobis
              perspiciatis omnis debitis necessitatibus corrupti, expedita illo
              hic dolorum quia atque.
            </p>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Intro;
