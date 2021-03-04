// contain methods + data for events of the timeline

import React, { Component } from "react";
import { connect } from "react-redux"; //import connect method from react-redux

import { fetchEvents } from "../actions/eventsActions"; //importing action
import EventsForm from "./EventsForm";

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <div>
        Events Container
        <EventsForm />
      </div>
    );
  }
}
//map state to props
export default connect(null, { fetchEvents })(EventsContainer);
