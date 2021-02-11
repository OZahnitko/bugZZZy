export const ISSUE_COLLAPSED = "issues/ISSUE_COLLAPSED";
export const ISSUE_EXPANDED = "issues/ISSUE_EXPANDED";

export const initialState = { expandedIssue: null };

const issuesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default issuesReducer;
