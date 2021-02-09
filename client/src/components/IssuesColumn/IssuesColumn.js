import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { IssueComponent } from "@components";
import { useAppHooks } from "@hooks";

import Wrapper, { IssueColumnHeading } from "./styled";

const IssuesColumn = ({ column: { issues, name }, dragOrigin }) => {
  const { issues: allIssues } = useAppHooks();

  return (
    <Droppable droppableId={name} isDropDisabled={dragOrigin === "unassigned"}>
      {(provided, snapshot) => (
        <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
          {/* TODO: Heading has to go outside of the drag container, as it messes us
          the drop animation */}
          <IssueColumnHeading>{name}</IssueColumnHeading>
          {issues
            .map((issue) => allIssues.find((i) => i.id === issue))
            .map((issue, index) => (
              <IssueComponent index={index} issue={issue} key={issue.id} />
            ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default IssuesColumn;
