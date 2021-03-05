import React from "react";
import { connect } from "react-redux";

const EventsList = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <ul>
          <li key={event.id}>
            {event.title} - {event.date} - {event.event_type} - {event.summary}{" "}
            - {event.skills_learned}
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventsList);
