import { combineReducers, createStore } from "redux";

import { boardsReducer, cardsReducer, listsReducer } from "@store";

const store = createStore(
  combineReducers({
    boards: boardsReducer,
    cards: cardsReducer,
    lists: listsReducer,
  })
);

export default store;
