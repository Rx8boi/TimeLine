//create action -> Fetch events api from rails

export const fetchEvents = () => {
  //why we installed thunk middleware we need dispatch as an argument
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((events) => dispatch({ type: "FETCH_EVENTS", payload: events }));
     
    //.then((events) => console.log("fetchEvents", events))
  };
};

//need to POST

export const addEvent = (event) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((event) => dispatch({ type: "ADD_EVENT", payload: event }));
  };
};
//need to update store state in reducer with another case 'ADD_EVENT -> dispatch not defined error

//DELETE action -> by eventID
// call remove even then return REMOVE_EVENT -> reducer
export const removeEvent = (event) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_EVENT", payload: event.id });
    fetch(`https://jsonplaceholder.typicode.com/users/${event.id}`, {
      method: "DELETE",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
};
