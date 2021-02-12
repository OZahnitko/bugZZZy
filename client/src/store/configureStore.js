import { combineReducers, createStore } from "redux";

import appReducer from "./modules/app";
import issuesReducer from "./modules/issues";
import usersReducer from "./modules/users";

export const store = createStore(
  combineReducers({
    app: appReducer,
    issues: issuesReducer,
    users: usersReducer,
  })
);
