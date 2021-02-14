import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LIST_RENAMED, LISTS_SET } from "@store";

const useListsHooks = () => {
  const dispatch = useDispatch();
  const { lists } = useSelector(({ lists }) => lists);

  return {
    lists,
    renameList: useCallback(
      (index, newListName) =>
        dispatch({
          payload: { index, newListName },
          type: LIST_RENAMED,
        }),
      [dispatch]
    ),
    setLists: useCallback(
      (lists) => dispatch({ payload: { lists }, type: LISTS_SET }),
      [dispatch]
    ),
  };
};

export default useListsHooks;
