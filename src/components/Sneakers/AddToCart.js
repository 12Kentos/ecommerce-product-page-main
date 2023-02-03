import { useContext } from "react";

import styles from "./AddToCart.module.scss";
import minusBtn from "../../images/icon-minus.svg";
import plusBtn from "../../images/icon-plus.svg";
import CartContext from "../../store/cart-context";

const AddToCart = () => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const addInputAmount = () => {
    cartCtx.changeInputAmount(1);
  };

  const subtractInputAmount = () => {
    cartCtx.changeInputAmount(-1);
  };

  const addToCartHandler = () => {
    cartCtx.addItem({
      type: cartCtx.itemType,
      name: "Fall Limited Edition Sneakers",
      amount: cartCtx.inputAmount,
      price: 125.0,
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
      <div className={styles["input-wrapper"]}>
        <button className={styles["number-btn"]} onClick={subtractInputAmount}>
          <img src={minusBtn} alt="Minus button" />
        </button>
        <input
          type="number"
          min="1"
          step="1"
          value={cartCtx.inputAmount}
          className={styles["number-input"]}
        />
        <button className={styles["number-btn"]} onClick={addInputAmount}>
          <img src={plusBtn} alt="Plus button" />
        </button>
      </div>
      <button className={styles["add-to-crt-btn"]} onClick={addToCartHandler}>
        <div
          className={styles["add-to-crt-img"]}
          alt="Cart image for add to cart button"
        ></div>
        <p className={styles["add-to-crt-text"]}>Add to cart</p>
      </button>
    </form>
  );
};

export default AddToCart;
