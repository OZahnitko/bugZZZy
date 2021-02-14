export const renameList = ({ index, newListName }, state) => {
  const { [index]: modifiedList } = state.lists;
  return {
    ...state,
    lists: [
      ...state.lists.slice(0, index),
      { ...modifiedList, listName: newListName || `List ${index + 1}` },
      ...state.lists.slice(index + 1),
    ],
  };
};
