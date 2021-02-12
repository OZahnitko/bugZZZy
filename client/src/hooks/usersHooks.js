import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { USERS_SET } from "@store";

export const useUsersHooks = () => {
  const { users } = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  return {
    setUsers: useCallback(
      (users) => dispatch({ payload: { users }, type: USERS_SET }),
      [dispatch]
    ),
    users,
  };
};
