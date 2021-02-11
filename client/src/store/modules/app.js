export const COLUMNS_SET = "app/COLUMNS_SET";
export const ISSUE_ADDED = "app/ISSUE_ADDED";
export const ISSUE_UNASSIGNED = "app/ISSUE_UNASSIGNED";
export const ISSUES_SET = "app/ISSUES_SET";

const initialState = { columns: [], issues: [] };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case COLUMNS_SET:
      return { ...state, columns: payload.columns };
    case ISSUE_ADDED:
      console.log(Math.max(...state.issues.map((issue) => issue.id)));
      const newIssue = {
        assignedTo:
          payload.newIssue.newIssueAssignTo === "unassigned"
            ? null
            : payload.newIssue.newIssueAssignTo,
        body: payload.newIssue.newIssueBody,
        id: (Math.max(...state.issues.map((issue) => issue.id)) + 1).toString(),
        title: payload.newIssue.newIssueTitle,
      };
      return {
        ...state,
        columns: {
          ...state.columns,
          [payload.newIssue.newIssueAssignTo === "unassigned"
            ? "unassigned"
            : "assigned"]: {
            ...state.columns[
              payload.newIssue.newIssueAssignTo === "unassigned"
                ? "unassigned"
                : "assigned"
            ],
            issues: [
              ...state.columns[
                payload.newIssue.newIssueAssignTo === "unassigned"
                  ? "unassigned"
                  : "assigned"
              ].issues,
              (
                Math.max(...state.issues.map((issue) => issue.id)) + 1
              ).toString(),
            ],
          },
        },
        issues: [...state.issues, newIssue],
      };
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
          ...state.issues.slice(indexOfIssueToBeUnassigned + 1),
        ],
      };
    case ISSUES_SET:
      return { ...state, issues: payload.issues };
    default:
      return state;
  }
};

export default appReducer;
