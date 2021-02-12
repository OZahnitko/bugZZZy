import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { IssueComponent } from "@components";
import { useIssuesHooks } from "@hooks";

import Wrapper, { StyledDragHandle, StyledIssuesContainer } from "./styled";

const IssueCategory = ({ issueCategory, index }) => {
  const { issues } = useIssuesHooks();

  return (
    <Draggable draggableId={issueCategory.issueCategoryName} index={index}>
      {(provided) => (
        <Wrapper {...provided.draggableProps} ref={provided.innerRef}>
          <StyledDragHandle {...provided.dragHandleProps}>
            {issueCategory.issueCategoryName}
          </StyledDragHandle>
          <Droppable droppableId={issueCategory.issueCategoryName} type="issue">
            {(provided) => (
              <StyledIssuesContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {issueCategory.issues
                  .map((issue) =>
                    issues.find((oneOfAllIssues) => oneOfAllIssues.id === issue)
                  )
                  .map((issue, index) => (
                    <IssueComponent
                      index={index}
                      issue={issue}
                      key={issue.id}
                    />
                  ))}
                {provided.placeholder}
              </StyledIssuesContainer>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default IssueCategory;
