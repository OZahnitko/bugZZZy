import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { IssuesColumn } from "@components";
import { useAppHooks } from "@hooks";

import Wrapper from "./styled";

const IssuesContainer = () => {
  const { columns, issues, unassignIssue } = useAppHooks();
  const [columnData, setColumnData] = useState(null);
  const [dragOrigin, setDragOrigin] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDragEnd = (dragResult) => {
    setDragOrigin(() => null);
    if (
      dragResult.source?.droppableId === dragResult.destination?.droppableId
    ) {
      const sourceContainerFilteredIssueOrder = columnData[
        dragResult.source.droppableId
      ].issues.filter((issue, index) => index !== dragResult.source.index);
      const destinationContainerNewIssueOrder = [
        ...sourceContainerFilteredIssueOrder.slice(
          0,
          dragResult.destination.index
        ),
        dragResult.draggableId,
        ...sourceContainerFilteredIssueOrder.slice(
          dragResult.destination.index
        ),
      ];
      setColumnData((columnData) => ({
        ...columnData,
        [dragResult.destination.droppableId]: {
          ...columnData[dragResult.destination.droppableId],
          issues: destinationContainerNewIssueOrder,
        },
      }));
    } else if (dragResult.destination === null) {
      return;
    } else {
      if (dragResult.destination.droppableId === "unassigned") {
        unassignIssue(dragResult.draggableId);
      }
      const sourceContainerFilteredIssueOrder = columnData[
        dragResult.source.droppableId
      ].issues.filter((issue, index) => index !== dragResult.source.index);
      const destinationContainerOriginalIssueOrder =
        columnData[dragResult.destination.droppableId].issues;
      const destinationContainerNewIssueOrder = [
        ...destinationContainerOriginalIssueOrder.slice(
          0,
          dragResult.destination.index
        ),
        dragResult.draggableId,
        ...destinationContainerOriginalIssueOrder.slice(
          dragResult.destination.index
        ),
      ];
      setColumnData((columnData) => ({
        ...columnData,
        [dragResult.source.droppableId]: {
          ...columnData[dragResult.source.droppableId],
          issues: sourceContainerFilteredIssueOrder,
        },
        [dragResult.destination.droppableId]: {
          ...columnData[dragResult.destination.droppableId],
          issues: destinationContainerNewIssueOrder,
        },
      }));
    }
  };

  const handleDragStart = (dragStart) =>
    setDragOrigin(() => dragStart.source.droppableId);

  useEffect(() => {
    if (columns && issues) {
      setColumnData(() => columns);
    }
  }, [columns]);

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <Wrapper>
          {columnData &&
            Object.keys(columnData)
              .map((key) => ({ ...columnData[key], name: key }))
              .map((column) => (
                <IssuesColumn
                  column={column}
                  dragOrigin={dragOrigin}
                  key={column.name}
                />
              ))}
          <Button
            danger
            onClick={() =>
              setIsModalVisible((isModalVisible) => !isModalVisible)
            }
            type="primary"
          >
            Now this is a button
          </Button>
        </Wrapper>
        <pre>{JSON.stringify({ columns, issues }, null, 2)}</pre>
      </DragDropContext>
      <Modal
        onCancel={() => setIsModalVisible(() => false)}
        onOk={() => setIsModalVisible(() => false)}
        visible={isModalVisible}
      >
        Henlo
      </Modal>
    </>
  );
};

export default IssuesContainer;
