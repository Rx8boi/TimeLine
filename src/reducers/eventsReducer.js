export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "ADD_EVENT":
      return [...state, action.payload];
    case "REMOVE_EVENT":
      let newEvents = state.filter((event) => event.id !== action.payload);
      return [...newEvents];
    default:
      return state;
  }
};
