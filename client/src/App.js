import React, { useEffect } from "react";

import { Board } from "@components";
import { useBoardsHooks, useCardsHooks, useListsHooks } from "@hooks";

import sampleData from "./sampleData.json";
import RootWrapper from "./styled";

const App = () => {
  const { boards, setBoards } = useBoardsHooks();
  const { cards, setCards } = useCardsHooks();
  const { lists, setLists } = useListsHooks();

  useEffect(() => {
    setBoards(sampleData.boards);
    setLists(sampleData.lists);
    setCards(sampleData.cards);
  }, []);

  return (
    <RootWrapper>
      {boards &&
        boards.map((board) => <Board board={board} key={board.boardId} />)}
      <pre>{JSON.stringify({ lists }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
