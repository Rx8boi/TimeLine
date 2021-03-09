export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "ADD_EVENT":
      return [...state, action.payload];

    //calls switch statement -> filters through cases fetch / add / hits remove_event
    // to remove id from state returns newEvents array to map
    case "REMOVE_EVENT":
      let newEvents = state.filter((event) => event.id !== action.payload);
      return [...newEvents];
    default:
      return state;
  }
};
