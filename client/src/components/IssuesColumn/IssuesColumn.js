import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { IssueComponent } from "@components";
import { useAppHooks } from "@hooks";

import Wrapper, { IssueColumnHeading } from "./styled";

const IssuesColumn = ({ column }) => {
  const { issues } = useAppHooks();

  return (
    <Droppable droppableId={column.name}>
      {(provided, snapshot) => (
        <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
          {/* TODO: Heading has to go outside of the drag container, as it messes us
          the drop animation */}
          <IssueColumnHeading>{column.name}</IssueColumnHeading>
          {issues
            .filter((issue) => issue.status === column.name)
            .map(
              (issue, index) =>
                issue.status === column.name && (
                  <IssueComponent index={index} issue={issue} key={issue.id} />
                )
            )}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default IssuesColumn;
