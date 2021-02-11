import { Avatar } from "antd";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

import Wrapper, { StyledDragHandle } from "./styled";

const IssueComponent = ({ index, issue }) => {
  return (
    <Draggable
      draggableId={issue.id}
      index={index}
      isDragDisabled={false}
      key={issue.id}
    >
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          assigned={issue.assignedTo}
          ref={provided.innerRef}
        >
          <StyledDragHandle {...provided.dragHandleProps} />
          <div>{issue.body}</div>
          {issue.assignedTo && <Avatar>{issue.assignedTo}</Avatar>}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default IssueComponent;

// TODO: Modals don't work for shit
