import React, { Component } from "react";

class EventsForm extends Component {
  //local state ->
  state = {
    event_type: "",
    summary: "",
    skills_learned: "",
    date: "",
    title: "",
  };
  render() {
    return (
      <div>
        <form>
          <br></br>
          Add a new Event
          <br></br>
          <label>Title: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
          ></input>
          <br></br>
          <label>Event Type: </label>
          <input
            type="text"
            value={this.state.event_type}
            onChange={this.handleChange}
            name="event_type"
          ></input>
          <br></br>
          <label>Summary: </label>
          <input
            type="text_field"
            value={this.state.summary}
            onChange={this.handleChange}
            name="summary"
          ></input>
          <br></br>
          <label>Skills Learned: </label>
          <input
            type="text"
            value={this.state.skills_learned}
            onChange={this.handleChange}
            name="skills_learned"
          ></input>
          <br></br>
          <label>Date: </label>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
            name="date"
          ></input>
          <br></br>
          <br></br>
          <input type="submit" value="Add Event" />
        </form>
      </div>
    );
  }
}

export default EventsForm;
