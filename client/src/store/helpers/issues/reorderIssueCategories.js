const reorderIssueCategories = (payload, state) => {
  if (payload.dragResult.destination) {
    const {
      [payload.dragResult.source.index]: movedIssueCategory,
    } = state.issueCategories;
    const filteredIssueCategories = state.issueCategories.filter(
      (issueCategory) => issueCategory !== movedIssueCategory
    );
    return {
      ...state,
      issueCategories: [
        ...filteredIssueCategories.slice(
          0,
          payload.dragResult.destination.index
        ),
        movedIssueCategory,
        ...filteredIssueCategories.slice(payload.dragResult.destination.index),
      ],
    };
  } else {
    return state;
  }
};

export default reorderIssueCategories;
