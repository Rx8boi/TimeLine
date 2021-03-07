import React from "react";
import { connect } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as TimeIcon } from "../assets/icons8-automation.svg";
import styled from "styled-components";

const Styles = styled.div`
  .vertical-timeline-element-title {
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
  }

  .vertical-timeline-element-subtitle {
    font-family: "Montserrat", sans-serif;
  }

  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2em 3em !important;
  }

  #description {
    margin: 1.5em 0 2em 0;
  }
`;

const EventsList = ({ events }) => {
  return (
    <div>
      <Styles>
        <VerticalTimeline>
          {events.map((event) => (
            <VerticalTimelineElement
              contentStyle={{ background: "#e6e6e6", color: "black" }}
              contentArrowStyle={{ borderRight: "9px solid  black" }}
              key={event.id}
              date={event.date}
              dateClassName="date"
              iconStyle={{
                background: "black",
                opacity: ".9",
              }}
              icon={<TimeIcon />}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <sub className="vertical-timeline-element-subtitle">
                {event.event_type}
              </sub>
              <p id="description">{event.summary}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Styles>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventsList);
