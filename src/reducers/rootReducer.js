import { combineReducers } from "redux";

import { jobsReducer } from "./jobsReducer";
import { eventsReducer } from "./eventsReducer";

export const rootReducer = combineReducers({
  events: eventsReducer,
  jobs: jobsReducer,
});

// not sure about this...
