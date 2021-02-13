// TODO: Convert to splice

const reorderIssues = ({ dragResult }, state) => {
  if (dragResult.destination === null) {
    return state;
  } else if (
    dragResult.source.droppableId === dragResult?.destination?.droppableId
  ) {
    const affectedIssueCategory = state.issueCategories.find(
      (issueCategory) =>
        issueCategory.issueCategoryName === dragResult.destination.droppableId
    );
    const indexOfAffectedIssueCategory = state.issueCategories.indexOf(
      affectedIssueCategory
    );
    const filteredDestinationIssueCategoryIssueOrder = state.issueCategories
      .find(
        (issueCategory) =>
          issueCategory.issueCategoryName === dragResult.destination.droppableId
      )
      .issues.filter((issue) => issue !== dragResult.draggableId);
    const newDestinationIssueCategoryIssueOrder = [
      ...filteredDestinationIssueCategoryIssueOrder.slice(
        0,
        dragResult.destination.index
      ),
      dragResult.draggableId,
      ...filteredDestinationIssueCategoryIssueOrder.slice(
        dragResult.destination.index
      ),
    ];
    return {
      ...state,
      issueCategories: [
        ...state.issueCategories.slice(0, indexOfAffectedIssueCategory),
        {
          ...state.issueCategories[indexOfAffectedIssueCategory],
          issues: newDestinationIssueCategoryIssueOrder,
        },
        ...state.issueCategories.slice(indexOfAffectedIssueCategory + 1),
      ],
    };
  } else if (
    dragResult.source.droppableId !== dragResult.destination.droppableId
  ) {
    const indexOfSourceIssueCategory = state.issueCategories.indexOf(
      state.issueCategories.find(
        (issueCategory) =>
          issueCategory.issueCategoryName === dragResult.source.droppableId
      )
    );
    const indexOfDestinationIssueCategory = state.issueCategories.indexOf(
      state.issueCategories.find(
        (issueCategory) =>
          issueCategory.issueCategoryName === dragResult.destination.droppableId
      )
    );
    const filteredSourceIssueCategoriesIssueOrder = state.issueCategories[
      indexOfSourceIssueCategory
    ].issues.filter((issue) => issue !== dragResult.draggableId);
    const issueCategoriesRemoved = [
      ...state.issueCategories.slice(0, indexOfSourceIssueCategory),
      {
        ...state.issueCategories[indexOfSourceIssueCategory],
        issues: filteredSourceIssueCategoriesIssueOrder,
      },
      ...state.issueCategories.slice(indexOfSourceIssueCategory + 1),
    ];
    const issueCategoriesAdded = [
      ...issueCategoriesRemoved.slice(0, indexOfDestinationIssueCategory),
      {
        ...state.issueCategories[indexOfDestinationIssueCategory],
        issues: [
          ...state.issueCategories[
            indexOfDestinationIssueCategory
          ].issues.slice(0, dragResult.destination.index),
          dragResult.draggableId,
          ...state.issueCategories[
            indexOfDestinationIssueCategory
          ].issues.slice(dragResult.destination.index),
        ],
      },
      ...issueCategoriesRemoved.slice(indexOfDestinationIssueCategory + 1),
    ];
    return {
      ...state,
      issueCategories: issueCategoriesAdded,
    };
  }
};

export default reorderIssues;
