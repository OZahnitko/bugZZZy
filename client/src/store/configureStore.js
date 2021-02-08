import { combineReducers, createStore } from "redux";

import appReducer from "./modules/app";

export const store = createStore(combineReducers({ app: appReducer }));
