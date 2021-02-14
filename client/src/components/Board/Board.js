import React from "react";

import { List } from "@components";

import Wrapper from "./styled";

const Board = ({ board }) => {
  return (
    <Wrapper>
      {board.boardLists.map((list, index) => (
        <List index={index} listId={list} key={list} />
      ))}
    </Wrapper>
  );
};

export default Board;
