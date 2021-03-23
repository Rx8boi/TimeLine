import React from "react";
import { connect } from "react-redux";
import { removeEvent } from "../actions/eventsActions";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as TimeIcon } from "../assets/icons8-automation.svg";
import { ReactComponent as AddIcon } from "../assets/icons8-plus.svg";
import styled from "styled-components";
import { ModalBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EventsForm from "./EventsForm";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { BiTrash } from "react-icons/bi";
import { FcTimeline } from "react-icons/fc";
import { useEffect } from "react";
import CardCount from "./CardCount";
// use ref -> for previous counted container...
import { useRef } from "react";

const Styles = styled.div`
  .add {
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  .vertical-timeline-element-title {
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
  }

  .vertical-timeline-element-title-add {
    text-align: center;
    position: absolute;
    font-family: "Bebas Neue", sans-serif;
    left: 100px;
    padding: 1px;
    top: 11px;
  }

  .vertical-timeline-element-subtitle {
    font-family: "Montserrat", sans-serif;
    text-decoration: underline;
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
    margin: 35px auto;
    width: 120%;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    position: relative;
    border-radius: 15px;
    height: 150px;
    display: inline-block;
    padding: 14px;
    text-align: left;
    font-family: "Montserrat", sans-serif;
  }

  .buttondark {
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    right: 6px;
    color: 151e25;

    &:hover {
      color: rgba(16, 24, 60, 0.25);
    }
    /*color: black;
    position: absolute;
    top: 0px;
    left: 9px;
    padding: 0px;
    margin: 1px;*/
  }
`;

const EventsList = ({ events, removeEvent }) => {
  const [show, setShow] = useState(false);

  //Callback

  // Display variable and function -> set initial state
  const [count, setCount] = useState(1);
  // Initial state should be 0....
  console.log(count);
  // Counted will be previous render of state.
  // const countedRef = useRef();
  // useEffect(() => {
  //   countedRef.current = count;
  // });
  // const counted = countedRef.current;
  // 1 on use state
  // 1 on useState
  // Code Wars -> bathroom breaks, glass of water -> goning blank

  return (
    <Styles>
      <br></br>
      {/* submit, to display on each card iteration, set initial state at 0. */}
      <h5>Add to Like Count by:</h5>
      <input
        type="number"
        id="inputnumb"
        min="0"
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <br></br>
      <br></br>
      <VerticalTimeline>
        <ReactTooltip />
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
            <h5>
              <span
                variant="link"
                className="buttondark"
                onClick={() => removeEvent(event)}
              >
                <BiTrash />
              </span>
            </h5>

            <span className="subtexts">
              <sub className="vertical-timeline-element-subtitle">
                {event.event_type}
              </sub>
              <p id="description">{event.summary}</p>
            </span>

            <p>
              <CardCount count={count} />
            </p>
          </VerticalTimelineElement>
        ))}
        <span
          variant="link"
          className="add"
          data-tip="Click to add"
          data-place="bottom"
          onClick={() => setShow(true)}
        >
          <VerticalTimelineElement
            key="add"
            icon={<AddIcon />}
            contentStyle={{ opacity: "0", display: "none" }}
            box-shadow={{ opacity: "0" }}
            contentArrowStyle={{ borderRight: "10px solid  black" }}
            iconStyle={{
              background: "black",
              opacity: ".9",
            }}
          ></VerticalTimelineElement>
        </span>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <h2>
                <FcTimeline />
                Add Event Modal
              </h2>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <EventsForm />
            <br></br>
            <h3>Current Events on TimeLine:</h3>
            {events.map((event) => (
              <select>
                <option value="" placeholder="Past Events">
                  {event.title}
                </option>
              </select>
            ))}
          </ModalBody>
        </Modal>
      </VerticalTimeline>
    </Styles>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps, { removeEvent })(EventsList);
//click delete button goes to actions ->
