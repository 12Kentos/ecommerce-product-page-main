import { useReducer, useState } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const defaultItemTypeState = { color: "" };

const itemTypeReducer = (state, action) => {
  if (action.type === "ITEM_COLOR_CHANGE") {
    if (action.itemColor === "-standard") {
      return { color: "" };
    }
    const updatedColor = action.itemColor;
    return { color: updatedColor };
  }
  return defaultItemTypeState;
};

const defaultImgNumberState = { number: "1" };

const imgNumberReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { number: action.number };
  }

  if (action.type === "ADD") {
    if (+action.number >= 4) {
      return { number: action.number.toString() };
    } else {
      return { number: (+state.number + 1).toString() };
    }
  }
  if (action.type === "SUBTRACT") {
    if (+action.number <= 1) {
      return { number: action.number.toString() };
    } else {
      return { number: (+state.number - 1).toString() };
    }
  }
  return defaultImgNumberState;
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

  const [imgNumberState, dispatchImgNumberAction] = useReducer(
    imgNumberReducer,
    defaultImgNumberState
  );

  const [isLightBoxActive, setIsLightBoxActive] = useState(false);
  {
  }

  const [inputAmount, setInputAmount] = useState(1);

  const changeImgNumber = (number) => {
    dispatchImgNumberAction({ type: "CHANGE", number: number });
  };

  const lightBoxActiveHandler = () => {
    setIsLightBoxActive(!isLightBoxActive);
  };

  const changeImgAddition = (number) => {
    dispatchImgNumberAction({ type: "ADD", number: number });
  };

  const changeImgSubtraction = (number) => {
    dispatchImgNumberAction({ type: "SUBTRACT", number: number });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const changeItemTypeHandler = (itemColor) => {
    dispatchItemTypeAction({ type: "ITEM_COLOR_CHANGE", itemColor: itemColor });
  };

  const changeInputAmountHandler = (number) => {
    setInputAmount((prevAmount) => {
      if (prevAmount + number < 1) {
        return prevAmount;
      }
      return prevAmount + number;
    });
  };

  const cartContext = {
    itemType: itemTypeState.color,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    changeItemType: changeItemTypeHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    imgNumber: imgNumberState.number,
    addImgNumber: changeImgAddition,
    subImgNumber: changeImgSubtraction,
    changeNumber: changeImgNumber,
    ligthBoxActive: isLightBoxActive,
    changeLightBoxActive: lightBoxActiveHandler,
    inputAmount: inputAmount,
    changeInputAmount: changeInputAmountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
