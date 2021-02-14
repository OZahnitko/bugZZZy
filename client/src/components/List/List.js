import React, { useEffect, useState } from "react";

import { useListsHooks } from "@hooks";
import { Card } from "@components";

import ListName from "./components/ListName/ListName";
import Wrapper from "./styled";

const List = ({ index, listId }) => {
  const { lists } = useListsHooks();
  const [listData, setListData] = useState(null);

  useEffect(() => {
    setListData(() => lists.find((list) => list.listId === listId));
  }, []);

  return (
    <Wrapper>
      {listData ? (
        <div>
          <ListName
            index={index}
            listName={lists.find((list) => list.listId === listId).listName}
          />
          {lists
            .find((list) => list.listId === listId)
            .listCards.map((card) => (
              <Card cardId={card} key={card} />
            ))}
        </div>
      ) : (
        "Nothing to see, please move along"
      )}
    </Wrapper>
  );
};

export default List;
