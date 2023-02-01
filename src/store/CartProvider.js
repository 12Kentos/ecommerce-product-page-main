import { useReducer, useState } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const defaultItemTypeState = "";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const itemTypeReducer = (state, action) => {
  if (action.type === "ITEM_COLOR_CHANGE") {
    const updatedColor = action.itemColor;
    return updatedColor;
  }
  return defaultItemTypeState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const [itemTypeState, dispatchItemTypeAction] = useReducer(
    itemTypeReducer,
    defaultItemTypeState
  );

  const [itemType, setItemType] = useState("");

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const changeItemTypeHandler = (itemColor) => {
    dispatchItemTypeAction({ type: "ITEM_COLOR_CHANGE", itemColor: itemColor });
    console.log(itemType);
    // setItemType(itemType);
  };

  const cartContext = {
    itemType: itemTypeState,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    changeItemType: changeItemTypeHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
