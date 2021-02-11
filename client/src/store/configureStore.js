import { combineReducers, createStore } from "redux";

import appReducer from "./modules/app";
import issuesReducer from "./modules/issues";

export const store = createStore(
  combineReducers({ app: appReducer, issues: issuesReducer })
);
