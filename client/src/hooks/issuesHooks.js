import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ISSUE_ADDED,
  ISSUE_CATEGORIES_SET,
  ISSUE_CATEGORIES_REORDERED,
  ISSUE_UNASSIGNED,
  ISSUES_REORDERED,
  ISSUES_SET,
} from "@store";

export const useIssuesHooks = () => {
  const { issueCategories, issues } = useSelector(({ issues }) => issues);
  const dispatch = useDispatch();

  return {
    addIssue: useCallback(
      (newIssue) => dispatch({ payload: { newIssue }, type: ISSUE_ADDED }),
      []
    ),
    issueCategories,
    issues,
    reorderIssueCategories: useCallback(
      (dragResult) =>
        dispatch({
          payload: { dragResult },
          type: ISSUE_CATEGORIES_REORDERED,
        }),
      []
    ),
    reorderIssues: useCallback(
      (dragResult) =>
        dispatch({ payload: { dragResult }, type: ISSUES_REORDERED }),
      []
    ),
    setIssues: useCallback(
      (issues) => dispatch({ payload: { issues }, type: ISSUES_SET }),
      []
    ),
    setIssueCategories: useCallback(
      (issueCategories) =>
        dispatch({ payload: { issueCategories }, type: ISSUE_CATEGORIES_SET }),
      []
    ),
    unassignIssue: useCallback(
      (unassignedIssueId) =>
        dispatch({ payload: { unassignedIssueId }, payload: ISSUE_UNASSIGNED }),
      []
    ),
  };
};
