import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BOARDS_SET } from "@store";

const useBoardsHooks = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector(({ boards }) => boards);

  return {
    boards,
    setBoards: useCallback(
      (boards) => dispatch({ payload: { boards }, type: BOARDS_SET }),
      [dispatch]
    ),
  };
};

export default useBoardsHooks;
