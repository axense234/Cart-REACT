export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      const newCartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newCartSize = state.cartSize - 1;
      const newTotalCost = state.totalCost - action.payload.itemPrice;
      return {
        ...state,
        cartItems: newCartItems,
        cartSize: newCartSize,
        totalCost: Math.round(newTotalCost.toFixed(2)),
      };

    case "MINUS_QUANTITY":
      const minusCartSize = state.cartSize - 1;
      const minusTotalCost = state.totalCost - action.payload;
      return {
        ...state,
        cartSize: minusCartSize,
        totalCost: Math.round(minusTotalCost.toFixed(2)),
      };

    case "PLUS_QUANTITY":
      const plusCartSize = state.cartSize + 1;
      const plusTotalCost = state.totalCost + action.payload;
      return {
        ...state,
        cartSize: plusCartSize,
        totalCost: Math.round(plusTotalCost.toFixed(2)),
      };

    case "CLEAR_CART":
      return { ...state, cartSize: 0, cartItems: [] };

    default:
      throw new Error("Incorrect action type detected.");
  }
};
