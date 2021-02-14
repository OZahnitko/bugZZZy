import React, { useEffect, useState } from "react";

import { useCardsHooks } from "@hooks";

import Wrapper from "./styled";

const Card = ({ cardId }) => {
  const { cards } = useCardsHooks();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    setCardData(() => cards.find((card) => card.cardId === cardId));
  }, []);

  return (
    <Wrapper>
      {cardData ? (
        <div>
          <div>Card</div>
          <p>{cardId}</p>
        </div>
      ) : (
        "Nothing to see here, please fuck"
      )}
    </Wrapper>
  );
};

export default Card;
