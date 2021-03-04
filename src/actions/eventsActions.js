//create action -> Fetch events api from rails

export const fetchEvents = () => {
  //why we installed thunk middleware we need dispatch as an argument
  return (dispatch) => {
    fetch("http://localhost:3000/events")
      .then((resp) => resp.json())
      .then((events) => dispatch({ type: "FETCH_EVENTS", payload: events }));
    //.then((events) => console.log("fetchEvents", events))
  };
};
