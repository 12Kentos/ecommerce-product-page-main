import styles from "./ImgButton.module.scss";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

const ImgButton = (props) => {
  const cartCtx = useContext(CartContext);

  const changeItemColor = () => {
    cartCtx.changeItemType(`-${props.type}`);
  };

  return (
    <button
      onClick={changeItemColor}
      className={`${styles["shoe-color"]} ${
        styles[`shoe-color-${props.type}`]
      } ${styles.active}`}
    ></button>
  );
};

export default ImgButton;
