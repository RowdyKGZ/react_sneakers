import React from "react";

import AppContext from "../context";

export const useCard = () => {
  const { cardItems, setCardItems } = React.useContext(AppContext);
  const total_price = cardItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cardItems, setCardItems, total_price };
};
