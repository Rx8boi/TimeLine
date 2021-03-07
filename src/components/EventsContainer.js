// contain methods + data for events of the timeline

import React, { Component } from "react";
import { connect } from "react-redux"; //import connect method from react-redux
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchEvents } from "../actions/eventsActions"; //importing action
import EventsForm from "./EventsForm";
import EventsList from "./EventsList";
//import Modal from "./modal/Modal";
//import VerticalLine from "./lottie/VerticalLine";

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <div>
        <br></br>

        <Container>
          <Row>
            <Col>
              <EventsList />
            </Col>
            <Col xs lg="2">
              <EventsForm />
            </Col>
          </Row>
        </Container>

        <br></br>
      </div>
    );
  }
}
//map state to props
export default connect(null, { fetchEvents })(EventsContainer);
