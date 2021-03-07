import React from "react";
import { connect } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EventsList = ({ events }) => {
  return (
    <div>
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={event.date}
            dateClassName="date"
          >
            <h3 className="vertical-timeline-element-title"> {event.title}</h3>
            <sub>{event.event_type}</sub>
            <p>{event.summary}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventsList);
