export const COLUMNS_SET = "app/COLUMNS_SET";
export const ISSUE_UNASSIGNED = "app/ISSUE_UNASSIGNED";
export const ISSUES_SET = "app/ISSUES_SET";

const initialState = { columns: [], issues: [] };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case COLUMNS_SET:
      return { ...state, columns: payload.columns };
    case ISSUE_UNASSIGNED:
      const issueToBeUnassigned = state.issues.find(
        (issue) => issue.id === payload.issueId
      );
      const indexOfIssueToBeUnassigned = state.issues.indexOf(
        issueToBeUnassigned
      );
      return {
        ...state,
        issues: [
          ...state.issues.slice(0, indexOfIssueToBeUnassigned),
          { ...issueToBeUnassigned, assignedTo: null },
          ...state.issues.slice(indexOfIssueToBeUnassigned),
        ],
      };
    case ISSUES_SET:
      return { ...state, issues: payload.issues };
    default:
      return state;
  }
};

export default appReducer;
