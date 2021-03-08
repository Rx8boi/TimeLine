import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../actions/eventsActions";
import styled from "styled-components";

const Styles = styled.div`
  .forms {
    background-color: #f2f2f2;
    margin: 70px auto;
    width: 300px;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    position: relative;
    border-radius: 10px;
    height: 470px;
    display: inline-block;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
  }

  .labels {
    background-color: white;
    margin: 20px auto;
    width: 240px;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    position: relative;
    border-radius: 15px;
    height: 310px;
    display: inline-block;
    padding: 25px;
    text-align: left;
    font-family: "Montserrat", sans-serif;
  }

  .formbutton {
    width: 50%;
    height: 30px;
    margin-top: 4px;
    border-radius: 2px;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    background: linear-gradient(
      90deg,
      rgb(16, 24, 60) 0%,
      rgb(61, 23, 79) 100%
    );
    border: none;
    color: #fff;
    font-size: 1.2rem;
  }

  .formbutton:hover {
    cursor: pointer;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(12, 99, 250, 0.15) !important;
    background: linear-gradient(
      90deg,
      rgb(61, 23, 79) 0%,
      rgb(12, 99, 250) 100%
    );
    transition: all 0.4s ease-out;
  }
`;

class EventsForm extends Component {
  //local state ->
  state = {
    event_type: "",
    summary: "",
    skills_learned: "",
    date: "",
    title: "",
  };

  handleChange = (e) => {
    //name is name attribute , value is what user types
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state);
  };

  render() {
    return (
      <Styles>
        <div className="forms">
          <form onSubmit={this.handleSubmit}>
            <br></br>
            <h2>Add Event</h2>

            <div className="labels">
              <label>Title: </label>
              <br></br>
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                placeholder="Title of new event"
              ></input>
              <br></br>
              <label>Event Type: </label>
              <br></br>
              <input
                type="text"
                value={this.state.event_type}
                onChange={this.handleChange}
                name="event_type"
                placeholder="Type of Event"
              ></input>
              <br></br>
              <label>Summary: </label>
              <br></br>
              <input
                type="text_field"
                value={this.state.summary}
                onChange={this.handleChange}
                name="summary"
                placeholder="Summary of Events"
              ></input>
              <br></br>
              <label>Date: </label>
              <br></br>
              <input
                type="date"
                value={this.state.date}
                onChange={this.handleChange}
                name="date"
              ></input>
            </div>
            <br></br>

            <input type="submit" value="Submit" className="formbutton" />
          </form>
        </div>
      </Styles>
    );
  }
}

export default connect(null, { addEvent })(EventsForm);

//Dropdown? For event_type
//          <select value={this.state.event_type} onChange={this.handleChange} name="event_type">
//            <option value="Work History">Work History</option>
//            <option value="Education">Education</option>
//            <option value="Life Event">Life Event</option>
//           <option value="Other">Other</option>
//            </select>
