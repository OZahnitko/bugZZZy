import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { IssuesColumn } from "@components";
import { useAppHooks } from "@hooks";

import Wrapper from "./styled";

const IssuesContainer = () => {
  // TODO: Figure out where to put the issues so that the order can be changed within the individual column
  const { columns, issues } = useAppHooks();

  const handleDragEnd = (dragResult) => {
    console.log(dragResult);
    if (
      dragResult.source?.droppableId === dragResult.destination?.droppableId
    ) {
      console.log("dropped in the same container");
      const movedItem = issues.find(
        (issue) => issue.id === dragResult.draggableId
      );
      console.log(movedItem);
    } else if (dragResult.destination === null) {
      console.log("dropped outside");
    } else {
      console.log("dropped into another container");
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Wrapper>
        {columns.map((column) => (
          <IssuesColumn column={column} key={column.name} />
        ))}
      </Wrapper>
      <pre>{JSON.stringify({ columns, issues }, null, 2)}</pre>
    </DragDropContext>
  );
};

export default IssuesContainer;
