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
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    padding: 1em 3em !important;
  }

  #description {
    margin: 0.9em 0 1em 0;
  }

  .subtexts {
    background-color: white;
    margin: 10px auto;
    width: 260px;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    position: relative;
    border-radius: 15px;
    height: 130px;
    display: inline-block;
    padding: 14px;
    text-align: left;
    font-family: "Montserrat", sans-serif;
  }
`;

const EventsList = ({ events }) => {
  return (
    <div>
      <Styles>
        <br></br>
        <VerticalTimeline>
          {events.map((event) => (
            <VerticalTimelineElement
              contentStyle={{ background: "#f2f2f2", color: "black" }}
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
              <div className="subtexts">
                <sub className="vertical-timeline-element-subtitle">
                  {event.event_type}
                </sub>
                <p id="description">{event.summary}</p>
              </div>
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
