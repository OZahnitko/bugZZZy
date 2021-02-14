import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CARDS_SET } from "@store";

const useCardsHooks = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(({ cards }) => cards);

  return {
    cards,
    setCards: useCallback(
      (cards) => dispatch({ payload: { cards }, type: CARDS_SET }),
      [dispatch]
    ),
  };
};

export default useCardsHooks;
