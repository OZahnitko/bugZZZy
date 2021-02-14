export const BOARDS_SET = "boards/BOARDS_SET";

const initialState = { boards: [] };

export const boardsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case BOARDS_SET:
      return { ...state, boards: payload.boards };
    default:
      return state;
  }
};
