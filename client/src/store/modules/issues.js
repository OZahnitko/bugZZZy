import { reorderIssueCategories, reorderIssues } from "../helpers/issues";

export const ISSUE_CATEGORIES_SET = "issues/ISSUE_CATEGORIES_SET";
export const ISSUE_CATEGORIES_REORDERED = "issues/ISSUE_CATEGORIES_REORDERED";
export const ISSUE_ADDED = "issues/ISSUE_ADDED";
export const ISSUE_UNASSIGNED = "issues/ISSUE_UNASSIGNED";
export const ISSUES_REORDERED = "issues/ISSUES_REORDERED";
export const ISSUES_SET = "issues/ISSUES_SET";

const initialState = { issueCategories: [], issues: [] };

const issuesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ISSUE_CATEGORIES_SET:
      return {
        ...state,
        issueCategories: Object.keys(payload.issueCategories)
          .map((key) => {
            return {
              issueCategoryName: key,
              ...payload.issueCategories[key],
            };
          })
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map(({ order, ...rest }) => rest),
      };
    case ISSUE_CATEGORIES_REORDERED:
      return reorderIssueCategories(payload, state);
    case ISSUES_REORDERED:
      return reorderIssues(payload, state);
    case ISSUES_SET:
      return { ...state, issues: payload.issues };
    default:
      return state;
  }
};

export default issuesReducer;
