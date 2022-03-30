import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../actions/eventsActions";
import styled from "styled-components";

const Styles = styled.div`
  .labels {
    background-color: white;
    margin: 20px auto;
    width: 468px;
    box-shadow: 0 0.34em 0.5em 0 rgba(16, 24, 60, 0.25),
      0 0.5em 1.25em 0 rgba(61, 23, 79, 0.15) !important;
    position: relative;
    border-radius: 15px;
    height: 380px;
    display: inline-block;
    padding: 25px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.9vh;
  }

  .formbutton {
    width: 100%;
    height: 40px;
    margin-top: 4px;
    border-radius: 8px;
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
    // event_type: "",
    // summary: "",
    // skills_learned: "",
    // date: "",
    // title: "",
    id: "",
    username: "",
    name: "",
    email: "",
    website: "",
    phone: "",

    
  };

  handleChange = (e) => {
    //name is name attribute , value is what user types

    // const callEvents = (events) = {
    //   events.map(event) = event() => {
    //   return event.title
    //   } 
    // }

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
            <div className="labels">
              <label>username: </label>
              <br></br>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                placeholder="Login name"
              ></input>
              <br></br>
              <label>Name: </label>
              <br></br>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                placeholder="Full name"
              ></input>
              <br></br>
              <label>Email: </label>
              <br></br>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="Email address"
              ></input>
              <br></br>
              <label>Website: </label>
              <br></br>
              <input
                type="url"
                value={this.state.website}
                onChange={this.handleChange}
                name="website"
                placeholder="website"
              ></input>
              <br></br>
              <label>Phone #: </label>
              <br></br>
              <input
                type="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                placeholder="Phone number"
              ></input>
              <br></br>
              {/* <label>Body: </label>
              <br></br>
              <input
                type="text_field"
                value={this.state.company.catchPhrase}
                onChange={this.handleChange}
                name="catchPhrase"
                placeholder="Catch Phrase"
              ></input> */}
              <br></br>
              {/* <label>Date: </label>
              <br></br>
              <input
                type="date"
                value={this.state.date}
                onChange={this.handleChange}
                name="date"
              ></input> */}
              
              {/* /* Current Event Query
              <select>

                <option value="">Work History</option>

              </select>
              <p>Selection: { }</p> */ }
            </div>
           

            <input type="submit" value="Submit" className="formbutton" />
          </form>
        </div>
      </Styles>
    );
  }
}

//need null value as first argument but instead of mapDispatchToProps can use addEvent instead
export default connect(null, { addEvent })(EventsForm);


