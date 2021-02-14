import { renameList } from "../helpers";

export const LIST_RENAMED = "lists/LIST_RENAMED";
export const LISTS_SET = "lists/LISTS_SET";

const initialState = { lists: [] };

export const listsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LIST_RENAMED:
      return renameList(payload, state);
    case LISTS_SET:
      return { ...state, lists: payload.lists };
    default:
      return state;
  }
};
