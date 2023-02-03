import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  changeItemType: (itemType) => {},
  itemType: "",
  imgNumber: "",
  addImgNumber: (number) => {},
  subImgNumber: (number) => {},
  changeNumber: (number) => {},
  ligthBoxActive: false,
  changeLightBoxActive: () => {},
  inputAmount: 1,
  changeInputAmount: (number) => {},
});

export default CartContext;
