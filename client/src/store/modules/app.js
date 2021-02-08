export const COLUMNS_SET = "app/COLUMNS_SET";
export const ISSUE_MOVED = "app/ISSUE_MOVED";
export const ISSUES_SET = "app/ISSUES_SET";

const initialState = { columns: [], issues: [] };

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case COLUMNS_SET:
      return { ...state, columns: payload.columns };
    case ISSUE_MOVED:
      return state;
    case ISSUES_SET:
      return { ...state, issues: payload.issues };
    default:
      return state;
  }
};

export default appReducer;
