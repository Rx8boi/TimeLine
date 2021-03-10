import React from "react";
import Developer from "../components/lottie/Developer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <br></br>
      <Row>
        <Col>
          <h1 align="center">About the Developer</h1>

          <h3 align="center">Meet Charles</h3>
          <p>
            Charles is a Junior Software Engineer graduating from Flatiron
            School. He has a background in STEM with a BS in Microbiology &
            Chemistry. A military brat, college grad & travel fanatic Charles
            moved to Austin from El Paso, Tx. Wanting city life with a splash of
            weird. Luckily Austin was able to provide all that and more. When
            not stuck behind a desk & writing lines of code, you can usually
            find Charles in the gym getting a workout in, or building something
            at home that upgrades his home theater set-up. With 2020 in the
            books and most of his Internet data used up on Netflix & Disney
            Plus, now Charles spends most of his free time taking his dog out
            into the wild for weekend camping escapades & long morning hikes.
          </p>

          <h3 align="center">How would you describe him?</h3>
          <p>
            He is an energetic, highly motivated and dynamic individual with a
            broad range of hands-on and theoretical experience. Adept at
            providing support and developing new processes through ongoing work,
            defect resolution and enhancement solutions. Expert in completing
            demanding assignments within crucial timelines. Employs strong
            management skills and methodical aptitude while demonstrating
            excellent interpersonal skills.
          </p>
        </Col>
        <Col>
          <br></br>
          <br></br>
          <Developer />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
