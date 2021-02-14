export const CARDS_SET = "cards/CARDS_SET";

const initialState = { cards: [] };

export const cardsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CARDS_SET:
      return { ...state, cards: payload.cards };
    default:
      return state;
  }
};
