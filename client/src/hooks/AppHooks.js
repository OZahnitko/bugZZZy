import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLUMNS_SET, ISSUE_UNASSIGNED, ISSUES_SET } from "@store";

export const useAppHooks = () => {
  const dispatch = useDispatch();

  const { columns, issues } = useSelector((state) => state.app);

  return {
    columns,
    issues,
    setColumns: useCallback(
      (columns) => dispatch({ payload: { columns }, type: COLUMNS_SET }),
      [dispatch]
    ),
    setIssues: useCallback(
      (issues) => dispatch({ payload: { issues }, type: ISSUES_SET }),
      [dispatch]
    ),
    unassignIssue: useCallback(
      (issueId) => dispatch({ payload: { issueId }, type: ISSUE_UNASSIGNED }),
      [dispatch]
    ),
  };
};
