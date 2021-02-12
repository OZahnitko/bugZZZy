import React, { useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { IssueCategory } from "@components";
import { useIssuesHooks } from "@hooks";

import Wrapper, { IssueCategoriesContainer } from "./styled";

const IssuesContainer = () => {
  const {
    issueCategories,
    reorderIssueCategories,
    reorderIssues,
  } = useIssuesHooks();

  const handleDragEnd = useCallback((dragResult) => {
    if (dragResult.type === "issueCategory") {
      reorderIssueCategories(dragResult);
    } else if (dragResult.type === "issue") {
      reorderIssues(dragResult);
    }
  }, []);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId="issueCategoriesContainer"
          direction="horizontal"
          type="issueCategory"
        >
          {(provided) => (
            <IssueCategoriesContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {issueCategories.map((issueCategory, index) => (
                <IssueCategory
                  index={index}
                  issueCategory={issueCategory}
                  key={issueCategory.issueCategoryName}
                />
              ))}
              {provided.placeholder}
            </IssueCategoriesContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
};

export default IssuesContainer;
