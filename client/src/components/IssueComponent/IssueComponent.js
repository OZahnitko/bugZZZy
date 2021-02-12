import React from "react";
import { Draggable } from "react-beautiful-dnd";

import Wrapper from "./styled";

const IssueComponent = ({ index, issue }) => {
  return (
    <Draggable draggableId={issue.id} index={index}>
      {(provided) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>{issue.title}</div>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default IssueComponent;
