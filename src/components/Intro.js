import React from "react";
import Thinker from "../components/lottie/Thinker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <div>
      <br></br>
      <Container>
        <Row>
          <Col>
            <br></br>
            <Thinker />
          </Col>
          <Col>
            <br></br>
            <h1>Welcome To TimeLine App</h1>
            <br></br>
            <p>
              TimeLine App was created with the mind-set of adding to a
              web-portfolio. Utilizing a culmination of ideas from Flatiron
              School and principles in my own studies. Resume's usually depict
              an accurate picture of someones past job & project history but I
              wanted to create something different, more tangible.
            </p>
            <br></br>
            <h3>Bring in TimeLine App.</h3>
            <p>
              A web-app that literally shows the flow of events that brought you
              to where you currently are. Then later in my portfolio another
              page will connect the User/Client with a Resume to view/download.
              I've done interviews for HR departments before and have always
              said that being personable is better than what is in the black &
              white of your resume.
            </p>
            <p>
              So with TimeLine App I hope to bring life to something repetitive
              and dull as a black and white resume. Bring life to an applicant's
              history, life events & current pursuits how it relates to the
              achievements on the .pdf or word document.
            </p>

            <h3>Hope you Enjoy!</h3>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Intro;
