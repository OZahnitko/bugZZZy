import React from "react";
import { Draggable } from "react-beautiful-dnd";

import Wrapper from "./styled";

const IssueComponent = ({ index, issue }) => {
  return (
    <Draggable draggableId={issue.id} index={index} key={issue.id}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div>{issue.body}</div>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default IssueComponent;
